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

  ${props => {
    if (props.dark) {
      return `
        background-color: rgba(255, 255, 255, ${props.activeHover ? 1 : 0});
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
  background-color: ${props => props.theme.color.colorBlack01};
  position: absolute;
  height: 100vh;
  width: 100%;
  max-width: 400px;
  padding: 58px 0 88px ${props => props.theme.padding.paddingXL};
  top: 0;
  left: 0;
  z-index: 1;
  h1 {
    color: ${props => props.theme.color.colorWhite01};
  }
`;

export const HamburgerWrapper = styled(animated.div)`
  position: absolute;
  right: 0px;
  top: 0px;
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
  margin-top: -5%;
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

export const SignInWrapper = styled.div`
  display: block;
  color: ${props => props.theme.color.colorWhite01};
  text-align: left;
  span {
    padding: ${props => props.theme.padding.paddingMD};
    &:first-of-type {
      padding-left: 0;
    }
  }
`;

export const PageName = styled.span`
  position: absolute;
  top: 24px;
  text-transform: uppercase;
  left: 55px;
  white-space: nowrap;
  transition: color 0.5s ease;
`;

export const OpenNavOverlay = styled(({ activeMenu, ...rest }) => (
  <animated.div {...rest} {...rest.swipe} />
))`
  position: fixed;
  display: block;
  visibility: ${props => (props.activeMenu ? "visible" : "hidden")};
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: ${props => (props.activeMenu ? "auto" : "none")};
  z-index: 0;
  transition: visibility 0.5s;
  transition-delay: ${props => (props.activeMenu ? "0s" : ".5s")};
`;

export const LinkWrapper = styled.div`
  display: flex;
  height: 58px;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
`;

export const LogoWrapper = styled.div`
  position: relative;
  height: 100%;
  flex-grow: 1;
  flex-basis: 0;
`;

export const Sides = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`;
