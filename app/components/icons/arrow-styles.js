import styled from "styled-components";

export const StyledArrowIcon = styled.svg`
  display: block;
  transition: transform 0.5s;
  transform: rotate(0deg);
  ${props => {
    if (props.direction === "right") {
      return `
        transform: rotate(180deg);
      `;
    }
    if (props.direction === "down") {
      return `
          transform: rotate(270deg);
        `;
    }

    if (props.direction === "up") {
      return `
            transform: rotate(90deg);
          `;
    }

}}
`;
