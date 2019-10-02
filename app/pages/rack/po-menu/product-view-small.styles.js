import styled from "styled-components";

export const StyledProductViewSmall = styled.div`
  position: relative;
`;

export const ShippingContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  float: left;
  background-color: ${props => props.theme.color.colorWhite01};
`;

export const DeliveryWrapper = styled.div`
  height: 56px;
  font-size: ${props => props.smallText ? "12px" : "18px"};
  transition: font-size 0.5s;
  margin-top: 10px;
`;

export const Delivery = styled.span`
  display: block;
  color: ${props => props.theme.color.colorBlack02};
  font-family: "Helvetica Neue";
  font-weight: 500;
  line-height: 28px;
`;