import styled from "styled-components";
import { animated } from "react-spring";
import CaretIcon from "../icons/caret";

const variantSelectHeight = "44px";

export const StyledVariantSelect = styled.button`
  position: relative;
  height: ${variantSelectHeight};
  width: 250px;
  padding: 0;
  border: 0;
  max-width: 100%;
  cursor: pointer;
`;

export const VariantDropdown = styled(animated.div)`
  position: absolute;
  display: block;
  bottom: 0px;
  background-color: ${props => props.theme.color.colorWhite01};
  height: 100%;
  overflow: hidden;
`;

export const VariantInventory = styled.span`
  position: relative;
  width: 60%;
  text-align: left;
  padding-right: 25px;
  padding-left: 18px;
  &:before {
    position: absolute;
    content: "";
    left: 0px;
    top: 50%;
    margin-top: -5px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${props =>
      props.lowInventory
        ? props.theme.color.colorOrange01
        : props.theme.color.colorGreen01};
  }
`;

export const VariantColor = styled.span`
  width: 40%;
  text-align: left;
`;

export const StyledReturnOption = styled.div`
  width: 100%;
  padding: 0 12px;
  height: ${variantSelectHeight};
  transition: background-color 0.5s;
  float: left;
  background-color: ${props =>
    props.isActive
      ? props.theme.color.colorWhite02
      : props.theme.color.colorWhite01};
  span {
    height: 100%;
    line-height: ${variantSelectHeight};
    float: left;
  }
  &:hover {
    background-color: ${props => props.theme.color.colorWhite02};
  }
`;

export const StyledCaretIcon = styled(CaretIcon)`
  position: absolute;
  width: 10px;
  top: 14px;
  right: 12px;
`;
