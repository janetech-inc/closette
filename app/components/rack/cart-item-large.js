import { useState, useMemo } from "react";
import { Row, Col } from "react-awesome-styled-grid";
import { useStateProvider } from "../../reducers/state_provider";
import { globalTypes } from "../../reducers/global_reducer";
import ProductQuantity from "./product-quantity";
import { CopyStyleOne } from "../global-styles/text-styles";
import Image from "../utils/image";
import {
  StyledCartItemLarge,
  ProductRow,
  SizeHeaderRow,
  StyledCol,
  SizeCopy
} from "./cart-item-large.styles";

const initialQuantity = (item) => {
  if (!item.sizes) return {};
  const quantityObj = {};
  item.sizes.forEach((size) => {
    if (!quantityObj[size]) {
      quantityObj[size] = {
        count: 0,
        whole_sale_price: item.whole_sale_price,
      };
    }
  });
  return quantityObj;
};

const sumQuantity = (quantity) => {
  const quantityKeyArr = Object.keys(quantity);
  let sumQuantity = 0;
  let sumPrice = 0;
  quantityKeyArr.forEach((size) => {
    sumQuantity += quantity[size].count;
    sumPrice += quantity[size].count * Number(quantity[size].whole_sale_price);
  });
  return {
    count: sumQuantity,
    price: sumPrice
  };
};

const CartItemLarge = ({ className, item }) => {
  const [quantity, setQuantity] = useState(initialQuantity(item));
  const [, dispatch] = useStateProvider();
  

  const handleQuantityChange = (size, add) => {
    if (add) {
      setQuantity((prevQuantity) => {
        const newQuantity = {...prevQuantity};
        newQuantity[size] = {
          ...newQuantity[size],
          count: newQuantity[size].count + 1,
        };
        return newQuantity;
      });
      dispatch({  
        type: globalTypes.updateCheckoutProduct,
        payload: {
          size,
          amount: 1,
          imageUrl: item.image,
          productId: item.id,
          vendorProductId: item.vendor_product_id,
          collectionName: item.collectionName,
          deliveryWindowEnd: item.delivery_window_end,
          price: quantity[size].whole_sale_price
        }
      });
    } else {
      if (quantity[size].count > 0) {
        setQuantity((prevQuantity) => {
          const newQuantity = {...prevQuantity};
          newQuantity[size] = {
            ...newQuantity[size],
            count: newQuantity[size].count - 1
          };
          return newQuantity;
        });
        dispatch({
          type: globalTypes.updateCheckoutProduct,
          payload: {
            size,
            amount: -1,
            productId: item.id,
            price: quantity[size].whole_sale_price
          }
        })
      }
    }
  };

  const productQuantitySum = useMemo(() => sumQuantity(quantity), [quantity]);

  return (
    <StyledCartItemLarge className={className}>
      <ProductRow>
        <Col md={2} lg={4} noGutter style={{paddingTop: "60px"}}>
          <Image src={item.trimmed_image}/>
        </Col>
        <Col md={6} lg={8} noGutter>
          <SizeHeaderRow className="centerColumns no-margin">
            <StyledCol md={1} lg={2} noGutter><SizeCopy>Size</SizeCopy></StyledCol>
            <StyledCol md={2} lg={2} noGutter><SizeCopy>Availability</SizeCopy></StyledCol>
            <StyledCol md={2} lg={3} noGutter><SizeCopy>Price</SizeCopy></StyledCol>
            <StyledCol md={3} lg={5} noGutter><SizeCopy>Quantity</SizeCopy></StyledCol>
          </SizeHeaderRow>
          {item.sizes && item.sizes.map((size, i) => {
            const isBgGrey = i % 2 === 0;
            return (
              <Row className="centerColumns no-margin" key={`${i}-${size}`}>
                <StyledCol sideBorders greyBg={isBgGrey} md={1} lg={2} noGutter><SizeCopy>{size}</SizeCopy></StyledCol>
                <StyledCol sideBorders greyBg={isBgGrey} md={2} lg={2} noGutter><SizeCopy>N/A</SizeCopy></StyledCol>
                <StyledCol sideBorders greyBg={isBgGrey} md={2} lg={3} noGutter><SizeCopy>{item.whole_sale_price}</SizeCopy></StyledCol>
                <StyledCol sideBorders greyBg={isBgGrey} md={3} lg={5} noGutter>
                  <ProductQuantity size={size} availability={10} quantityChange={handleQuantityChange} itemId={item.id}>
                    <SizeCopy>{quantity[size].count}</SizeCopy>
                  </ProductQuantity>
                </StyledCol>
              </Row>
            )}
          )}
        </Col>
        <Row className="no-margin padding-top-24">
          <Col md={2} lg={4} className="no-padding">
            <CopyStyleOne align="left">Color: {item.color}</CopyStyleOne>
          </Col>
          <Col md={6} lg={8} className="no-padding">
            <CopyStyleOne align="right" className="padding-bottom-8">Qty. {productQuantitySum.count}</CopyStyleOne>
            <CopyStyleOne align="right">Total Cost ${productQuantitySum.price}</CopyStyleOne>
          </Col>
        </Row>
      </ProductRow>
    </StyledCartItemLarge>
  );
};

export default CartItemLarge;
