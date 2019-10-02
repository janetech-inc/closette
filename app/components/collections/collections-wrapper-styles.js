import styled from "styled-components";
import { animated } from "react-spring";

export const StyledCollectionsWrapper = styled(animated.div)`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.color.colorBlack01};
  overflow-x: scroll;
  white-space: nowrap;
`;
