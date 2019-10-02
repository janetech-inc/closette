import styled from "styled-components";

export const StyledProductQuantity = styled.div`
  position: relative;
  height: 100%;
`;

export const QuantityButton = styled.button`
  position: absolute;
  height: 28px;
  width: 28px;
  top: 50%;
  margin-top: -14px;
  border-radius: 14px;
  border: 1px solid ${props => props.theme.color.colorBlue01};
  left: ${props => props.left ? "10%" : "auto"};
  right: ${props => props.left ? "auto" : "10%"};
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.2s, color 0.2s;
  &:hover {
    background-color: ${props => props.theme.color.colorBlue01};
    color: ${props => props.theme.color.colorWhite01};
  }
`;