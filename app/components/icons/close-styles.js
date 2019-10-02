import styled from "styled-components";

export const StyledCloseIcon = styled.button`
  position: relative;
  display: block;
  outline: 0;
  border: 0;
  padding: 0;
  transition: opacity 0.25s;
  background: transparent;
  cursor: pointer;
  }
  &:before, &:after {
    position: absolute;
    content: ' ';
    top: 0;
    left: ${props => props.moveLeft};
    height: 100%;
    width: 1px;
    background-color: ${props => props.theme.color.colorBlack01}
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
    &:hover {
      opacity: .8;
    }
`;
