import styled from "styled-components";
import { animated } from "react-spring";

export const ModalWrapper = styled.div`
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  pointer-events: ${props => (props.isActive ? "auto" : "none")};
  margin: 0 auto;
  text-align: center;
`;

export const ModalInnerWrapper = styled(animated.div)`
  position: relative;
  display: inline-block;
  width: 96%;
  max-width: 800px;
  height: 100%;
  max-height: 70vh;
  top: 50%;
  padding: ${props => props.theme.padding.paddingMD};
  overflow: scroll;
  background-color: ${props => props.theme.color.colorWhite01};
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
