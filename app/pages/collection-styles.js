import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";

export const OpeningBackground = styled(
  React.forwardRef(({ image, ...rest }, ref) => (
    <animated.div ref={ref} {...rest} />
  ))
)`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  visibility: visible;
  z-index: 10;
`;

export const DesignerNameWrapper = styled.div`
  position: absolute;
  width: 100%;
  padding: ${props =>
    `${props.theme.padding.paddingLG} ${props.theme.padding.paddingMD}`};
  bottom: 0px;
`;

export const DesignerName = styled.h1`
  color: ${props => props.theme.color.colorWhite01};
  white-space: initial;
  font-size: 5vw;
  line-height: 4.3vw;
  text-transform: uppercase;
`;

export const VideoPlayerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
