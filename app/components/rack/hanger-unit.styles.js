import styled from "styled-components";

export const StyledHangerUnit = styled.div`
  width: 300px;
  height: 680px;
  background-repeat: no-repeat;
  background-position-x: center;

  ${props => {
    if (props.default) {
      return `
        background-size: 185px;
        background-image: url('https://res.cloudinary.com/cxn-fashion/image/upload/v1558985688/hanger_sleex4.svg');
      `;
    }
  }};
  ${props => {
    if (props.product) {
      return `
        background-size: 430px auto;
      `;
    }
  }};
`;

export const ItemDrop = styled.div`
  position: relative;
  display: block;
  top: 40px;
  height: 307px;
  width: 159px;
  margin: auto;
  border: 1px dashed ${props => props.theme.color.colorBlue01};
  background-color: rgba(255,255,255,0.5);
  align-items: center;
  text-align: center;
`;

export const AddIcon = styled.div`
  position: relative;
  top: 50%;
  width: 100%;
  color: ${props => props.theme.color.colorBlue01};
  font-family: "Helvetica Neue";
  font-size: 42px;
  font-weight: lighter;
  line-height: 30px;
`;

export const DropText = styled.div`
  position: relative;
  top: 50%;
  color: ${props => props.theme.color.colorBlue01};
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
`;

