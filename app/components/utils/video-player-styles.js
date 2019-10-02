import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import { device } from "../global-styles/media-queries";
import PlayIcon from "../icons/play";
import PauseIcon from "../icons/pause";

export const LooksWrapper = styled(animated.div)`
  position: absolute;
  width: 100%;
  left: 0;
  height: 50%;
  z-index: 1;
  bottom: 0px;
  @media ${device.tablet} {
    width: 40%;
    left: 60%;
    bottom: auto;
    height: 100%;
  }
`;

export const ChapterCopy = styled.span`
  display: block;
  font-size: 62px;
  white-space: nowrap;
  line-height: 60px;
`;

export const ChapterNumber = styled.h2`
  position: absolute;
  display: ${props => (props.hideLookNumber ? "none" : "block")};
  left: 28px;
  bottom: 120px;
  color:white;
  opacity: ${props => (props.activeCuePoint ? "1" : "0")};
  font-family: "miller-display";
  font-style: italic;
  pointer-events: none;
  text-align: left;
  transition: opacity 0.5s;
`;

export const VideoControls = styled.div`
  position: absolute;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  bottom: 28px;
  z-index: 2;
`;

export const VideoOverlay = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  opacity: ${props => (props.paused ? "0.7" : "1")};
  background-color: ${props => (props.paused ? "#060606" : "transparent")};
`;

export const StyledPlayIcon = styled(PlayIcon)`
  display: ${props => (props.isPlaying ? "none" : "block")};
`;
export const StyledPauseIcon = styled(PauseIcon)`
  display: ${props => (props.isPlaying ? "block" : "none")};
`;

export const VideoWrapper = styled(animated.div)`
  position: relative;
  float: left;
  height: 100%;
  overflow: hidden;
  z-index: 2;
`;

export const LargeControlsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  cursor: pointer;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s;
  z-index: 1;
  opacity: ${props => (props.isPlaying ? "0" : "1")};
  &:hover {
    opacity: 1;
    circle {
      fill: ${props => props.theme.color.colorRed02};
      fill-opacity: 1;
    }
  }
  circle {
    -webkit-transition: fill-opacity 0.3s, fill 0.3s;
    transition: fill-opacity 0.3s, fill 0.3s;
  }
`;

export const Video = styled(
  React.forwardRef(({ fullScreen, desktopSrc, mobileSrc, ...rest }, ref) => (
    <animated.video ref={ref} {...rest} />
  ))
)`
  max-width: 100%;
  width: 100%;
  height: 100%;
  ${props => {
    if (props.fullScreen) {
      return `
        // This will crop the video in order to achieve a full screen view
        // Make video to at least 100% wide and tall
        min-width: 100%; 
        min-height: 100%;
        max-width: none;
        
        // Setting width & height to auto prevents the browser from stretching or squishing the video
        width: auto;
        height: auto;
        
        // Center the video
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      `;
    }
  }}
`;

export const StyledVideoPlayer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 0 auto;
`;

export const CuePointCopyOverlay = styled(animated.div)`
  position:absolute;
  left:0;
  color: #FFFFFF;	
  text-align: center;	
  text-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);}
  width:100%;
  height:100%;
  background: black;
`;

export const SmallCopy = styled.div`
  position:relative;
  top:${props => (props.top)};
  font-family: MillerDisplay-Light;	
  font-size: 55px;	
  line-height: 95px;	
  text-align: center;	
`;

export const LargeCopy = styled.div`
  position:relative;
  top:${props => (props.top)};
  font-family: MillerDisplay-Light;	
  font-size: 55px;	
  line-height: 95px;	
  font-family: MillerDisplay-LightItalic;	
  font-size: 95px;	
  line-height: 95px;	

`;