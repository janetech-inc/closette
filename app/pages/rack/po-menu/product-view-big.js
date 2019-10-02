import PropTypes from "prop-types";
import { useSpring } from "react-spring";
import { useState, useMemo, useCallback, useRef, Fragment } from "react";
import { useEventListener } from "../../../utils/helper_hooks";
import { Container, Row, Col } from 'react-awesome-styled-grid';
import Dropdown from "../../../components/utils/dropdown";
import CartItemLarge from "../../../components/rack/cart-item-large";
import { useStateProvider } from "../../../reducers/state_provider";
import { BUTTON_TYPES } from "../../../components/utils/button";
import {
  HeadlineStyleOne,
  HeadlineStyleThree,
  CopyStyleOne,
  HeadlineStyleTwo,
} from "../../../components/global-styles/text-styles";
import {
  StyledProductViewBig,
  LeftRail,
  RightRail,
  CustomRow,
  EditButton,
  PaymentRow,
  CustomColumn,
  OrderTotal,
  DeliveryWindow,
  ProductDescription,
  StyledButton,
  ButtonWrapper,
  ButtonDivider,
  StickyHeader,
  BackButton,
} from "./product-view-big.styles.js";
import { gaTrackRackEvents, RackEventsTypes } from "../../../utils/ga_analytics";
import axios from "axios/index";

const calcTotals = (orderTotals, payToday, estTax, estShipping) => {
  // prob want to revisit this at some point
  // if we don't pay the entire amount on checkout, do we also split the tax?
  const estTaxValue = orderTotals * estTax;
  const estShippingValue = orderTotals > 0 ? estShipping : 0;
  const orderTotalsValue = estTaxValue + estShippingValue + orderTotals;
  const payTodayValue = payToday * orderTotalsValue;
  return {
    estTaxValue: estTaxValue.toFixed(2),
    estShippingValue: estShippingValue,
    payTodayValue: payTodayValue.toFixed(2),
    orderSubTotalsValue: orderTotals.toFixed(2),
    orderTotalsValue: orderTotalsValue.toFixed(2),
    remainingBalanceValue: (orderTotalsValue - payTodayValue).toFixed(2)
  }
}

const ProductViewBig = ({
  shipMents,
  toggleMenu,
}) => {
  const [{ cartTotals, user, checkoutProducts }] = useStateProvider();
  const [sticky, setSticky] = useState(false);
  const LeftRailsRef = useRef(null);
  let timeout;

  const getTotalItemsInCart = () => {
    const sum = (a, b) => a + b;
    return Object.values(checkoutProducts).map((i) => { return Object.values(i.sizes).reduce(sum) }).reduce(sum);
  }
  
  const doSubmitOrder = async () => {
    if (Object.keys(checkoutProducts).length === 0) return;
    
    let product = checkoutProducts[Object.keys(checkoutProducts)[0]];
    await axios.post('/send-email', {
      payload: {
        user: user,
        deliveryWindow: product.delivery_window_end,
        orderTotal: cartTotals,
        products: checkoutProducts,
        totalCartItems: getTotalItemsInCart()
      }
    }).then((ab) => {
      alert('Order Submitted');
    }).catch((err) => {
      alert('Error Submitting Order');
    })
  }

  const handlePlaceOrder = () => {
    doSubmitOrder();
  }

  const handleAppointment = () => {
    alert('make showroom appointment')
  };
  
  const totals = useMemo(() => calcTotals(cartTotals.orderSubtotal, 1, cartTotals.estTax, cartTotals.estShipping), [cartTotals]);

  const stickyNav = useCallback((e) => {
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    timeout = window.requestAnimationFrame(() => {
      if (e.target.scrollTop > 104 && !sticky) {
        setSticky(true);
      } else if (e.target.scrollTop <= 104 && sticky) {
        setSticky(false);
      }
    });
  }, [sticky]);

  useEventListener('scroll', stickyNav, LeftRailsRef.current);

  const stickyNavAnimation = useSpring({
    transform: sticky ? "translateY(0%)" : "translateY(-100%)"
  });

  const rackHeadline = user ? `${user.nickname}'s Rack` : "Rack";

  return (
    <StyledProductViewBig>
      <LeftRail ref={LeftRailsRef}>
        <StickyHeader style={stickyNavAnimation}>
          <Container style={{padding: '0', width: "100%"}}>
            <Row>
              <Col md={2} lg={2}>
                <BackButton sticky onClick={() => toggleMenu()}>Back to Rack</BackButton>
                <HeadlineStyleTwo>
                  {rackHeadline}
                </HeadlineStyleTwo>
              </Col>
              <Col md={3} lg={3}>
                <Dropdown small label="Designer Collections" selected={shipMents && shipMents[0] && shipMents[0].items && shipMents[0].items[0].collectionName}/>
                {/* <Dropdown small label="Designer Collections" selected="Roksana SS'19"/> */}
              </Col>
              <Col md={3} lg={3}>
                <Dropdown small label="Shipments" selected={`All Shipments (${shipMents.length} items)`}/>
              </Col>
            </Row>
          </Container>
        </StickyHeader>
        <BackButton onClick={() => {toggleMenu(); gaTrackRackEvents(RackEventsTypes.RackToggled, 'Menu Closed')}}>Back to Rack</BackButton>
        <CustomRow padding="24px 0 12px 0" style={{position: "relative"}}>
          <HeadlineStyleOne>
            {rackHeadline}
          </HeadlineStyleOne>
          <EditButton style={{marginTop: "42px"}} onClick={()=>{gaTrackRackEvents(RackEventsTypes.RackExportPDF, 'Export PDF')}}>
            Export PDF
          </EditButton>
        </CustomRow>
        <CustomRow>
          <div style={{position: "relative", paddingBottom: "6px"}}>
            <CustomColumn padding="0 16px 0 0">
              <Dropdown label="Designer Collections" selected={shipMents && shipMents[0] && shipMents[0].items && shipMents[0].items[0].collectionName}/>
            </CustomColumn>
            <CustomColumn padding="0 0 0 16px">
              <Dropdown label="Shipments" selected={`All Shipments (${shipMents.length} items)`}/>
            </CustomColumn>
          </div>
        </CustomRow>
        {shipMents.map((shipment, i) => (
          <Fragment key={shipment.deliveryWindow+i}>
            <CustomRow>
              <DeliveryWindow>
                Shipment {i + 1} Delivery Window: {shipment.deliveryWindow}
                <span>{shipment.items && shipment.items.length} Items</span>
              </DeliveryWindow>
            </CustomRow>
            <Container style={{padding: '0 0.75rem', width: "100%"}}>
              {shipment.items && shipment.items.map((item, i) => (
                <div key={`${i}- ${item.id}`}>
                  <Row>
                    <ProductDescription>
                      <CopyStyleOne bold={true}>
                        {`${item.designer} / ${item.description}`}
                      </CopyStyleOne>
                      <CopyStyleOne>
                        Product #{item.vendor_product_id}
                      </CopyStyleOne>
                      {/* <EditButton style={{marginTop: "43px"}}>
                        Add a Note
                      </EditButton> */}
                    </ProductDescription>
                  </Row>
                  <CartItemLarge item={item}/>
                </div>
              ))}
            </Container>
          </Fragment>
        ))
      }
      </LeftRail>
      <RightRail>
        <CustomRow noTop>
          <HeadlineStyleThree>
            Complete Purchase Order
          </HeadlineStyleThree>
        </CustomRow>
        { Boolean(user) &&
          <CustomRow>
            <div style={{position: "relative", paddingBottom: "6px"}}>
              <CopyStyleOne bold={true}>
                Buyer Information
              </CopyStyleOne>
              {/* <EditButton>
                Edit
              </EditButton> */}
            </div>
            <div>
              <CopyStyleOne>
                <div>{user.nickname}</div>
                {
                  Boolean(user.emails.length) &&
                    <div>{user.emails[0].value}</div>
                }
              </CopyStyleOne>
            </div>
          </CustomRow>
        }
        {/* <CustomRow>
          <div style={{position: "relative", paddingBottom: "6px"}}>
            <CopyStyleOne bold={true}>
              Ship To
            </CopyStyleOne>
            <EditButton>
              Edit
            </EditButton>
          </div>
          <div>
            <CopyStyleOne>
              1234 Street Name Floor #<br/>
              City, State, Zip Code<br/>
              Country Name<br/>
            </CopyStyleOne>
          </div>
        </CustomRow> */}
        {/* <CustomRow>
          <div style={{position: "relative", paddingBottom: "6px"}}>
            <CopyStyleOne bold={true}>
              Payment Method
            </CopyStyleOne>
            <EditButton>
              Edit
            </EditButton>
          </div>
          <div>
            <CopyStyleOne>
              Mastercard ending 1234<br/>
              (Payment managed by Hilldun)
            </CopyStyleOne>
          </div>
        </CustomRow> */}
        <CustomRow>
          <div style={{position: "relative", paddingBottom: "6px"}}>
            <CopyStyleOne bold={true}>
              Shipments By Delivery Window
            </CopyStyleOne>
          </div>
          <div>
            <CopyStyleOne>
              {
                shipMents.map((shipment) => {
                  return <div>{`${shipment.deliveryWindow} (${shipment.items.length})`}</div>
                })
              }
            </CopyStyleOne>
          </div>
        </CustomRow>
        <CustomRow>
          <div style={{position: "relative", paddingBottom: "6px"}}>
            <CopyStyleOne bold={true}>
              Payment Summary
            </CopyStyleOne>
          </div>
          <div>
            <PaymentRow>
              <CustomColumn>
                <CopyStyleOne>
                  Order Subtotal
                </CopyStyleOne>
              </CustomColumn>
              <CustomColumn right={true}>
                <CopyStyleOne>
                  ${totals.orderSubTotalsValue}
                </CopyStyleOne>
              </CustomColumn>
            </PaymentRow>
            <PaymentRow>
              <CustomColumn>
                <CopyStyleOne>
                  Est. Tax
                </CopyStyleOne>
              </CustomColumn>
              <CustomColumn right={true}>
                <CopyStyleOne>
                  ${totals.estTaxValue}
                </CopyStyleOne>
              </CustomColumn>
            </PaymentRow>
            <PaymentRow>
              <CustomColumn>
                <CopyStyleOne>
                  Est. Shipping
                </CopyStyleOne>
              </CustomColumn>
              <CustomColumn right={true}>
                <CopyStyleOne>
                  ${totals.estShippingValue}
                </CopyStyleOne>
              </CustomColumn>
            </PaymentRow>
            <PaymentRow>
              <OrderTotal>
                <CustomColumn>
                  <CopyStyleOne>
                    Order Total
                  </CopyStyleOne>
                </CustomColumn>
                <CustomColumn right={true}>
                  <CopyStyleOne>
                    ${totals.orderTotalsValue}
                  </CopyStyleOne>
                </CustomColumn>
              </OrderTotal>
            </PaymentRow>
            <PaymentRow>
              <ButtonWrapper>
                <StyledButton
                  onClick={()=>{gaTrackRackEvents(RackEventsTypes.RackSubmitOrderRequest, 'Submit Order Request'); handlePlaceOrder();}}
                  buttonStyle={BUTTON_TYPES.styleOne}
                  cta="SUBMIT ORDER REQUEST"
                />
                <ButtonDivider>
                  OR
                </ButtonDivider>
                <StyledButton
                  buttonStyle={BUTTON_TYPES.styleTwo}
                  onClick={()=>{gaTrackRackEvents(RackEventsTypes.RackMakeAppointment, 'Show room appointment'); handleAppointment();}}
                  cta="MAKE SHOWROOM APPOINTMENT"
                />
              </ButtonWrapper>
            </PaymentRow>
          </div>
        </CustomRow>
      </RightRail>
    </StyledProductViewBig>
  );
};

ProductViewBig.propTypes = {
  shipMents: PropTypes.array,
  menuExpanded: PropTypes.bool,
};

ProductViewBig.defaultProps = {
  shipMents: [],
  menuExpanded: false,
};

export default ProductViewBig;