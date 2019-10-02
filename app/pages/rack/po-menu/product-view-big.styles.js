import styled from "styled-components";
import { animated } from "react-spring";
import { ButtonStyleThree, CopyStyleTwo, CopyStyleOne } from "../../../components/global-styles/text-styles";
import Button from "../../../components/utils/button";

export const StyledProductViewBig = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const LeftRail = styled.div`
  position: relative;
  display: inline-block;
  width: calc(100% - 360px);
  padding: 24px;
  height: 100%;
  overflow: scroll;
`;

export const RightRail = styled.div`
  position: relative;
  display: inline-block;
  width: 360px;
  height: 100%;
  padding: 24px;
  background-color: ${props => props.theme.color.colorGrey04};
  overflow: scroll;
`;

export const StickyHeader = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 360px);
  z-index: 99;
  padding: 20px 24px;
  background-color: ${props => props.theme.color.colorWhite01};
  border-bottom: 1px solid ${props => props.theme.color.colorGrey05};
`;

export const EditButton = styled(ButtonStyleThree)`
  position: absolute;
  right: 0;
  top: 0;
`;

export const PaymentRow = styled.div`
  padding: 4px 0;
`;

export const CustomRow = styled.div`
  padding: 12px 0;
  ${props => {
    if (props.noTop) {
      return `
        padding-top: 0;
      `;
    } else if (props.noBottom) {
      return `
        padding-bottom: 0;
      `;
    } else if (props.padding) {
      return `
        padding: ${props.padding};
      `;
    }
  }}
`;

export const CustomColumn = styled.span`
  display: inline-block;
  width: ${props => props.width ? props.width : "50%"};
  padding: ${props => props.padding ? props.padding : "0"};
  text-align: ${props => props.right ? "right" : "left"};
`;

export const OrderTotal = styled.div`
  border-top: 1px solid ${props => props.theme.color.colorGrey02};
  border-bottom: 1px solid ${props => props.theme.color.colorGrey02};
  padding: 6px 0;
`;

export const DeliveryWindow = styled(CopyStyleTwo)`
  border-bottom: ${props => props.theme.color.colorGrey02} 1px solid;
  padding: 10px 0;
  span {
    float: right;
  }
`;

export const ProductDescription = styled.div`
  position: relative;
  width: 100%;
  border-bottom: ${props => props.theme.color.colorGrey02} 1px solid;
  padding: 24px 0 10px 0;
`;

export const ButtonWrapper = styled.div`
  padding: 20px 0;
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const ButtonDivider = styled(CopyStyleOne)`
  position: relative;
  width: 100%;
  text-align: center;
  padding: 20px 0;
  &:before, &:after {
    content: "";
    position: absolute;
    top: 50%;
    margin-top: -1px;
    height: 1px;
    width: calc(50% - 20px);
    background-color: ${props => props.theme.color.colorBlack01};
  }
  &:before {
    left: 0;
  }
  &:after {
    right: 0;
  }
`;

export const BackButton = styled(ButtonStyleThree)`
  position: absolute;
  z-index: 2;
  ${props => {
    if (props.sticky) {
      return `
        position: relative;
        text-align: left;
        padding-top: 4px;
        padding-bottom: 3px;
      `;
    } else {
      return `
        top: 16px;
      `;
    }
  }}
`;