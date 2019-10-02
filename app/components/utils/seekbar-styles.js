import styled from "styled-components";
import { animated } from "react-spring";
import PlayIcon from "../icons/play";
import PauseIcon from "../icons/pause";
import FullScreen from "../icons/full-screen";

export const StyledPlayIcon = styled(PlayIcon)`
  display: ${props => (props.isPlaying ? "none" : "block")};
  margin-top: 50%;
  transform: translateY(-25%);
`;

export const StyledPauseIcon = styled(PauseIcon)`
  display: ${props => (props.isPlaying ? "block" : "none")};
  margin-top: 50%;
  transform: translateY(-25%);
`;

export const PlayControlsWrapper = styled.div`
  display: inline-block;
  height: 100%;
  cursor: pointer;
  circle {
    transition: fill-opacity 0.3s, fill 0.3s;
  }
  &:hover {
    circle {
      fill: ${props => props.theme.color.colorRed02};
      fill-opacity: 1;
    }
  }
`;

export const StyledFullscreen = styled(FullScreen)`
  display: block;
  margin-top: 16px;
`;

export const FullscreenControlsWrapper = styled.div`
  display: inline-block;
  height: 100%;
  cursor: pointer;
  svg {
    transition: fill-opacity 0.3s, fill 0.3s;
    fill: ${props => props.theme.color.colorGrey01};
  }
  &:hover {
    svg {
      fill: ${props => props.theme.color.colorWhite01};
      fill-opacity: 1;
    }
  }
`;

export const SeekBarInnerWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: calc(100% - 78px);
  margin-left: 10px;
  margin-right: 10px;
`;

export const ProgressBar = styled(animated.div)`
  position: absolute;
  top: 0;
  @-moz-document url-prefix() {
    top: 7px;
  }
  height: 2px;
  margin: 25px 0px;
  pointer-events: none;
  background-color: ${props => props.theme.color.colorRed02};
`;

export const StyledSeekBar = styled.div`
  position: relative;
  display: inline-block;
  width: 80%;
  max-width: 900px;
  height: 52px;
  @-moz-document url-prefix() {
    height: 59px; 
  }
`;

export const SeekBarInput = styled.input`
  position: relative;
  display: inline-block;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  padding: 25px 0px;
  background: transparent;

  /* Hides the slider so that custom slider can be made */
  -webkit-appearance: none;
  border-radius: 0; /* iOS */
  transition: background-color 0.5s;

  @-moz-document url-prefix() {
    box-shadow: none;
  }

  &:hover {
    &::-webkit-slider-runnable-track {
      background-color: rgba(255, 255, 255, 1);
    }
    &::-ms-track {
      background-color: rgba(255, 255, 255, 1);
    }
    &::-moz-range-track {
      background-color: rgba(255, 255, 255, 1);
    }
  }

  &:focus {
    outline: none;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  &::-ms-track {
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &::-webkit-slider-runnable-track {
    transition: background-color 0.5s;
    background-color: rgba(255, 255, 255, 0.2);
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 2px;
    height: 2px;
    background: transparent;
  }

  &::-moz-range-track {
    transition: background-color 0.5s;
    background-color: rgba(255, 255, 255, 0.2);
  }

  ::-moz-range-thumb {
    width: 2px;
    height: 2px;
    background: transparent;
    box-sizing: border-box;
    border-radius: 0 !important;
  }

  &::-ms-thumb {
    background: transparent;
    height: 2px;
    width: 2px;
    box-sizing: border-box;
  }

  &::-ms-ticks-after {
    display: none;
  }

  &::-ms-ticks-before {
    display: none;
  }

  &::-ms-track {
    transition: background-color 0.5s;
    background-color: rgba(255, 255, 255, 0.2);
    color: transparent;
    height: 2px;
    border: none;
  }

  &::-ms-tooltip {
    display: none;
  }
`;
