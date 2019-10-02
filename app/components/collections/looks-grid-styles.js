import styled from "styled-components";
import { animated } from "react-spring";
import Button from "../utils/button";
import VariantSelect from "../utils/variant-select";
import ArrowIcon from "../icons/arrow";

export const StyledLooksGrid = styled(animated.div)`
  display: block;
  height: calc(100% - 80px);
  width: 100%;
  overflow: scroll;
`;

export const LooksPanel = styled.div`
  width: 100%;
  height: 100%;
`;

export const LooksButtonWrapper = styled(animated.div)`
  display: flex;
  background-color: black;
  padding: 20px 15px;
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  margin: auto 0;
  padding-right: 10px;
  width: 50%;
  span {
    padding: 2px 0;
    &:first-of-type {
      padding-bottom: 8px;
      font-family: "miller-display";
      color: ${props => props.theme.color.colorWhite01};
      font-weight: 300;
      font-size: 18px;
      line-height: 20px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  border-radius: 2px;
  padding-left: 10px;
  margin: 0;
  width: 50%;
`;

export const StyledButton = styled(Button)`
  float: right;
  width: 100%;
  width: 100%;
`;

export const StyledVariantSelect = styled(VariantSelect)`
  float: right;
  display: block;
  width: 100%;
  margin-bottom: 12px;
`;

export const ScrollArrow = styled(ArrowIcon)`
  margin-left: 7px;
`;
