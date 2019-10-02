import styled from "styled-components";
import VideoPlayer from "../components/utils/video-player";

export const StyledVideoPlayer = styled(VideoPlayer)`
  display: inline-block;
  width: 100vw;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: ${props => props.theme.color.colorBlack01};
`;

export const AnimationWrapper = styled.div`
  position: absolute;
  height: 100%;
  right: 0px;
  width: 100%;
  z-index: 3;
`;