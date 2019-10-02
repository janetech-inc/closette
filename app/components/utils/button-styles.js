import styled from "styled-components";

export const ButtonCta = styled.span`
  display: block;
`;

export const StyledButton = styled.button`
  position: relative;
  display: inline-block;
  width: auto;
  height: 44px;
  max-width: 100%;
  padding: 0px 20px;
  margin: 0;
  border: 0px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.5s, color 0.5s;
  &:focus {
    outline: 1px dashed ${props => props.theme.color.colorGrey01};
  }
  ${props => {
    if (props.buttonStyle == 1) {
      return `
        color: ${props.isSubmitting ? props.theme.color.colorBlack01 : props.theme.color.colorWhite01};
        background-color: ${props.isSubmitting ? props.theme.color.colorYellow01 : props.theme.color.colorBlue01};
        &:hover {
          background-color: ${props.theme.color.colorYellow01};
          color: ${props.theme.color.colorBlack01};
        }
      `;
    } else if (props.buttonStyle == 2) {
      return `
        display: ${props.isSubmitting ? "none" : "inline-block"};
        color: ${props.theme.color.colorBlack01};
        background-color: transparent;
        border: 1px solid ${props.theme.color.colorBlack01};
        &:hover {
          background-color: ${props.theme.color.colorYellow01};
          color: ${props.theme.color.colorBlack01};
        }
      `;
    }
  }}
`;
