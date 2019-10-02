import styled from "styled-components";
import { animated } from "react-spring";

export const PlusIcon = styled.div`
  position: absolute;
  top: 32px;
  left: 20%;
  width: 60%;
  height: 1px;
  background-color: ${props => props.theme.color.colorBlue01};
  transition: background-color 0.5s, transform 0.5s;
  transform: ${props => (props.isActive ? "rotate(45deg)" : "rotate(0deg)")};
  &:before {
    content: "";
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    transform: rotate(90deg);
    background-color: inherit;
  }
`;

export const StyledLookCellWrapper = styled(animated.div)`
  position: relative;
  width: ${props => props.ratio}%;
  height: ${props => props.heightratio}%;
  float: left;
  cursor: pointer;
  overflow: hidden;
}`;

export const StyledLookCell = styled(animated.div)`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
`;

export const VideoCell = styled.video`
  // This will crop the video in order to achieve a full screen view
  // Make video to at least 100% wide and tall
  min-width: 100%;
  min-height: 100%;
  max-width: none;

  // Setting width & height to auto prevents the browser from stretching or squishing the video
  width: auto;
  height: 101%;

  // Center the video
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PreviousLook = styled.button`
  position: absolute;
  top: 10%;
  left: 20px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;

export const NextLook = styled.button`
  position: absolute;
  top: 10%;
  right: 20px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;

export const StyledFullScreenWrapper = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  border: none;
  outline: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  transform: translate(-50%, -50%);
  svg {
    transition: fill 0.5s, transform 0.5s;
    fill: ${props => props.theme.color.colorBlue01};
  }
`;

export const LookCellOverlay = styled.div`
  position: absolute;
  bottom: 15px;
  right: ${props => props.right ? "15px" : "auto"};
  left: ${props => props.right ? "auto" : "15px"};
  width: 65px;
  height: 65px;
  border-radius: 33px;
  transition: background-color 0.5s;
  background-color: rgba(4, 10, 180, 0);
  &:hover {
    background-color: rgba(4, 10, 180, 1);
    ${PlusIcon} {
      background-color: ${props => props.theme.color.colorWhite01};
    }
    ${StyledFullScreenWrapper} {
      svg {
        fill: ${props => props.theme.color.colorWhite01};
      }
    }
  }
`;


