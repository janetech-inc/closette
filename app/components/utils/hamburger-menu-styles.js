import styled from "styled-components";

export const StyledHamburgerMenu = styled.div`
  position: relative;
  display: block;
  height: 58px;
  width: 64px;
  padding: 15px 24px;
  cursor: pointer;
  z-index: 2;
`;

export const HamburgerIcon = styled.span`
  position: relative;
  display: block;
  height: 1px;
  width: 16px;
  top: 14px;
  transition: background-color 0.5s;
  &:before,
  &:after {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    left: 0px;
    transition: background-color 0.5s, transform 0.5s;
  }
  &:before {
    top: -7px;
    transform: ${props =>
      props.activeMenuItem && "translateY(7px) rotate(-45deg)"};
  }

  &:after {
    bottom: -7px;
    transform: ${props =>
      props.activeMenuItem && "translateY(-7px) rotate(45deg)"};
  }

  ${props => {
    if (props.activeTheme === "dark") {
      return `
        background-color: #000000;
        &:before, &:after {
          background-color: ${props.activeMenuItem ? "#FFFFFF" : "#000000"};
        }
      `;
    }
    if (props.activeTheme === "light") {
      return `
        background-color: ${
          props.activeMenuItem
            ? "transparent"
            : props.activeHover
            ? "#000000"
            : "#FFFFFF"
        };
        &:before, &:after {
          background-color: ${
            !props.activeHover || props.activeMenuItem ? "#FFFFFF" : "#000000"
          };
        }
      `;
    }
  }}
`;
