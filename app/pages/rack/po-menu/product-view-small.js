import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import CartItem from "../../../components/rack/cart-item";
import {
  StyledProductViewSmall,
  ShippingContainer,
  DeliveryWrapper,
  Delivery,
} from "./product-view-small.styles.js";

const ProductViewSmall = ({
  shipMents,
  menuSize,
}) => {
  const [thumbnailView, setThumbnailView] = useState(menuSize === 1);

  useEffect(() => {
    if (menuSize === 1 && !thumbnailView) {
      setThumbnailView(true);
    } else if (menuSize === 2 && thumbnailView) {
      setThumbnailView(false);
    }
  }, [menuSize]);

  let count = 0;
  return (
    <StyledProductViewSmall>
      {shipMents.map((shipMent, i) => (
        <ShippingContainer key={`${shipMent.id}-${i}`}>
          <DeliveryWrapper smallText={thumbnailView}>
            <Delivery>{` Shipment ${i + 1} Delivery Window:`}</Delivery>
            <Delivery>{shipMent.deliveryWindow}</Delivery>
          </DeliveryWrapper>
          {shipMent.items.map((item, j) => (
            <CartItem key={`${item.id}-${i}`} thumbnail={thumbnailView} item={item} index={count++} />
          ))}
        </ShippingContainer>
      ))
    }
    </StyledProductViewSmall>
  );
};

ProductViewSmall.propTypes = {
  shipMents: PropTypes.array,
  menuExpanded: PropTypes.bool,
};

ProductViewSmall.defaultProps = {
  shipMents: [],
  menuExpanded: false,
};

export default ProductViewSmall;
