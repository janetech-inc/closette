import styled from "styled-components";

export const StyledCaretIcon = styled.svg`
  display: block;
  color: ${props => props.theme.color.colorWhite01};
  transform-origin: center center;
  transition: transform 0.25s;
  transform: ${props => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
  &:before {
    display: block;
    padding-top: 3px;
  }
  ${props => {
    if (props.direction === "up") {
      return `
        transform: ${props.open ? "rotate(0deg)" : "rotate(180deg)"};
      `;
    }
  }}
`;
