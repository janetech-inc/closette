import styled from "styled-components";
import { animated } from "react-spring";
import Logo from "../components/icons/logo";

export const StyledNav = styled.nav`
  position: fixed;
  display: flex;
  top: 0;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 58px;
  z-index: 99999;
  transition: all 0.5s ease;
  background-color: white;

  ${props => {
    if (props.dark) {
      return `
        ${StyledLogo} {fill: #000000};
        ${Rack} {color: #000000};
        ${PageName} {color: #000000};
        ${RackCount} {background-color: #000000; color: #FFFFFF};
      `;
    }
    if (props.light) {
      return `
        background-color: rgba(255, 255, 255, ${props.activeHover ? 1 : 0});
        ${StyledLogo} {fill: ${props.activeHover ? "#000000" : "#FFFFFF"}}
        ${Rack} {color: ${props.activeHover ? "#000000" : "#FFFFFF"}}
        ${PageName} {color: ${props.activeHover ? "#000000" : "#FFFFFF"}}
        ${RackCount} {
          background-color: ${props.activeHover ? "#000000" : "#FFFFFF"};
          color: ${props.activeHover ? "#FFFFFF" : "#000000"};
        }
      `;
    }
  }}
`;

export const StyledLogo = styled(Logo)`
  max-width: 100%;
  max-height: 100%;
  height: 38px;
  transition: fill 0.5s ease;
`;

export const StyledHiddenLogo = styled(Logo)`
  position: absolute;
  top: 7px;
  left: ${props => props.theme.padding.paddingXL};
  height: 38px;
  fill: #ffffff;
`;

export const Rack = styled.a`
  float: right;
  line-height: 26px;
  padding: 0 ${props => props.theme.padding.paddingLG};
  transition: color 0.5s ease;
`;

export const RackCount = styled.span`
  display: inline-block;
  height: 26px;
  width: 26px;
  margin-left: 8px;
  background-color: ${props => props.theme.color.colorWhite01};
  color: ${props => props.theme.color.colorBlack01};
  border-radius: 50%;
  transition: all 0.5s ease;
`;

export const HiddenNavWrapper = styled(animated.div)`
  background-color: #FFFFFF;
  position: absolute;
  height: 100vh;
  width: 50%;
  max-width: 400px;
  margin-top: 58px;
  top: 0;
  left: 0;
  z-index: 1;
  h1 {
    color: #000000;
  }
`;

export const HiddenCheckoutPreviewWrapper = styled(animated.div)`
  background-color: #FFFFFF;
  position: absolute;
  height: 100vh;
  width: 50%;
  max-width: 400px;
  margin-top: 58px;
  top: 0;
  right: 0;
  z-index: 1;
`;

export const SearchWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${props => (props.displaySearch ? "visible" : "hidden")};
  width: 100%;
  min-height: 200px;
  background-color: #FFFFFF;
  z-index: 2;
`;

export const HiddenNavBackdrop = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateZ(0);
  background-color: rgba(0, 0, 0, 0.5);
  margin-top: 58px;
`;

export const LeftIcons = styled(animated.div)`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const RightIcons = styled(animated.div)`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
  .cart-count {
    padding: 15px 24px;
  }
`;

export const HiddenNavContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const HiddenNavList = styled.ul`
  display: block;
  width: 100%;
  max-width: 400px;
  float: left;
  text-align: left;
  padding: 0;
  line-height: 28px;
  font-size: 16px;
  li {
    display: block;
    a {
      display: inline-block;
      padding: 6px 0;
      margin: 6px 0;
      border-bottom: 1px solid transparent;
      transition: border-bottom 0.5s;
      &:hover {
        border-bottom: 1px solid white;
      }
    }
  }
`;

export const HiddenCheckoutPreview = styled.ul`
  display: block;
  width: 100%;
  max-width: 400px;
  float: left;
  text-align: left;
  padding: 0;
  line-height: 28px;
  font-size: 16px;
  li {
    display: block;
    a {
      display: inline-block;
      padding: 6px 0;
      margin: 6px 0;
      border-bottom: 1px solid transparent;
      transition: border-bottom 0.5s;
      &:hover {
        border-bottom: 1px solid white;
      }
    }
  }
`;

export const HorizontalLine = styled.div`
  border: 1px solid grey;
  margin-left: 10px;
  width: 50%;
`;

// export const SignInWrapper = styled.div`
//   display: block;
//   color: ${props => props.theme.color.colorWhite01};
//   text-align: left;
//   span {
//     padding: ${props => props.theme.padding.paddingMD};
//     &:first-of-type {
//       padding-left: 0;
//     }
//   }
// `;

export const PageName = styled.span`
  position: absolute;
  top: 24px;
  text-transform: uppercase;
  left: 55px;
  white-space: nowrap;
  transition: color 0.5s ease;
`;

export const OpenNavOverlay = styled(({ activeMenu, showCheckoutPreview, ...rest }) => (
  <animated.div {...rest} {...rest.swipe} />
))`
  position: fixed;
  display: block;
  visibility: ${props => ((props.activeMenu || props.showCheckoutPreview) ? "visible" : "hidden")};
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: ${props => (props.activeMenu ? "auto" : "none")};
  z-index: 0;
  transition: visibility 0.5s;
  transition-delay: ${props => (props.activeMenu ? "0s" : ".5s")};
`;

// export const LinkWrapper = styled.div`
//   display: flex;
//   height: 58px;
//   align-items: center;
//   justify-content: center;
//   flex-wrap: nowrap;
// `;

export const LinkWrapper = styled.div`
  margin: 20px 10px;
  a {
    text-decoration: none;
    color: black;
    &:visited { color: black; }
    &:hover { color: black; }
    &:active { color: black; }
  }
`;

export const LogoWrapper = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const Sides = styled.div`
`;
