import styled from "styled-components";
import { animated } from "react-spring";

export const StyledLoadingOverlay = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999999;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.color.colorBlack01};
  z-index: 0;
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`