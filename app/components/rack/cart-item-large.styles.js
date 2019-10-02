import styled from 'styled-components';
import { Row, Col } from "react-awesome-styled-grid";
import { CopyStyleOne } from "../global-styles/text-styles";

export const StyledCartItemLarge = styled.div`
  text-align: center;
`;

export const ProductRow = styled(Row)`
  padding: 24px 0;
  border-bottom: 1px solid ${props => props.theme.color.colorGrey02};
`;
export const SizeHeaderRow = styled(Row)`
  border-bottom: 1px solid ${props => props.theme.color.colorGrey01};
`;

export const StyledCol = styled(Col)`
  padding: 16px;
  background-color: ${props => props.greyBg ? props.theme.color.colorGrey04 : props.theme.color.colorWhite01};
  height: 100%;
  ${props => {
    if (props.sideBorders) {
      return `
        border-right: 1px solid ${props.theme.color.colorGrey01};
        &:last-of-type {
          border-right: 0;
        }
      `;
    }
  }}
`;

export const SizeCopy = styled(CopyStyleOne)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`