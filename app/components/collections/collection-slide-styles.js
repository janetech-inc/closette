import styled from "styled-components";
import { animated } from "react-spring";
import { device } from "../global-styles/media-queries";

export const StyledCollectionSlide = styled(({singleSlide, ...otherProps}) => <animated.div {...otherProps}/>)`
  position: relative;
  display: block;
  height: 100vh;
  overflow: hidden;
  cursor: pointer;
  @media ${device.tablet} {
    display: inline-block;
  }
  ${props => {
    if (props.singleSlide) {
      return `
        position: initial;
        margin-left: 33.3333333%;
        overflow: visible;
        left: 0;
      `
    }
  }}
`;

export const CollectionImageWrapper = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  height: 100%;
  width: 100vw;
  pointer-events: none;
`;

export const CollectionImage = styled(({mainImage, ...otherProps}) => <animated.div {...otherProps}/>)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: ${props => props.mainImage ? 0 : 1};
`;

export const DesignerNameWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  padding: ${props => `${props.theme.padding.paddingLG} ${props.theme.padding.paddingMD}`};
  ${props => {
    if (props.singleSlide) {
      return `
        left: 0;
      `
    }
  }}
`;

export const DesignerName = styled.h1`
  color: ${props =>
    props.themeBlack
      ? props.theme.color.colorBlack01
      : props.theme.color.colorWhite01};
  white-space: initial;
  font-size: 5vw;
  line-height: 4.3vw;
  text-transform: uppercase;
`;
