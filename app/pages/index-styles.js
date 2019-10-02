import React from "react";
import styled from "styled-components";
import VideoPlayer from "../components/utils/video-player";

export const PageWrapper = styled.div`
  position: absolute;
  height: 100%;
  right: 0px;
  width: 100%;
  z-index: 3;
`;
export const StyledVideoPlayer = styled(
  React.forwardRef((props, ref) => <VideoPlayer ref={ref} {...props} />)
)`
  display: inline-block;
  width: 100vw;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: ${props => props.theme.color.colorBlack01};
`;

export const ShowCollectionsButton = styled.div`
  position: absolute;
  padding: 20px;
  right: calc(5% - 10px);
  bottom: 6px;
  cursor: pointer;
  color: ${props => props.theme.color.colorWhite01};
  z-index: 2;
`;
