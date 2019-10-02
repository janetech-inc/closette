import styled from "styled-components";
import theme from "./theme";

// ----------------------------- //
// ------ Headline Styles ------ //
// ----------------------------- //

export const HeadlineStyleOne = styled.h1`
  font-family: "miller-display"; 
  font-size: 35px;
  line-height: 38px;
  font-weight: 300;
  color: ${theme.color.colorBlack02};
`;

export const HeadlineStyleTwo = styled.h2`
  font-family: "miller-display"; 
  font-size: 24px;
  line-height: 30px;
  font-weight: 300;
  color: ${theme.color.colorBlack02};
`;

export const HeadlineStyleThree = styled.h3`
  font-family: "miller-display"; 
  font-size: 18px;
  line-height: 28px;
  font-weight: 300;
  color: ${theme.color.colorBlack02};
`;

// ----------------------------- //



// ----------------------------- //
// -------- Copy Styles -------- //
// ----------------------------- //

export const CopyStyleOne = styled.p`
  font-family: "Helvetica Neue";
  font-size: 12px;
  line-height: 20px;
  color: ${theme.color.colorBlack02};
  font-weight: ${props => props.bold ? "bold" : "normal"};
  text-align: ${props => props.align || "left"};
`;

export const CopyStyleTwo = styled.p`
  font-family: "Helvetica Neue";
  font-size: 18px;
  line-height: 28px;
  color: ${theme.color.colorBlack02};
  font-weight: ${props => props.bold ? "bold" : "normal"};
`;

export const CopyStyleThree = styled.p`
  font-family: "Helvetica Neue";
  font-size: 12px;
  line-height: 20px;
  color: ${theme.color.colorGrey03};
  font-weight: ${props => props.bold ? "bold" : "normal"};
`;

// ----------------------------- //



// ----------------------------- //
// ------- Button Styles ------- //
// ----------------------------- //

export const ButtonStyleThree = styled.button`
  font-family: "Helvetica Neue";
  font-size: 12px;
  line-height: 20px;
  background-color: transparent;
  color: ${theme.color.colorBlue01};
  padding: 0;
  margin: 0;
  outline: 0;
  border: 0;
  cursor: pointer;
  border-radius: 0;
`;

// ----------------------------- //