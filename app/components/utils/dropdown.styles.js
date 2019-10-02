import styled from "styled-components";

export const StyledDropdown = styled.div`
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  border-bottom: ${props => props.theme.color.colorGrey02} 1px solid;
  ${props => {
    if (props.small) {
      return `
        padding: 4px 0;
        ${SelectedItem} {
          padding-top: 2px;
        }
      `;
    } else {
      return `
        padding: 10px 0;
        ${SelectedItem} {
          padding-top: 10px;
        }
      `;
    }
  }}
`;

export const SelectedItem = styled.span`
  display: inline-block;
  width: 100%;
  color: ${props =>props.theme.color.colorBlack02};
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
`;