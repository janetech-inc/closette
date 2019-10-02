import styled from "styled-components";

export const StyledPOMenu = styled.div`
  position: fixed;
  background-color: white;
  height: 100%;
  transition: width 0.5s;
  right: 0;
  top: 0;
  width: ${props =>
    (props.menuSize === 1 && "230px") || 
    (props.menuSize === 2 && "360px") ||
    (props.menuSize === 3 && "100%")
  };
  z-index: 99999;
  ${props => {
    if (props.menuSize === 3) {
      return `
        transition-delay: 0.5s;
      `;
    } else if (props.menuSize != 3 && props.delayFadeIn) {
      return `
        transition-delay: 0.5s;
      `;
    }
  }}
`;

export const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const Title = styled.span`
  color: ${props => props.theme.color.colorBlack02};
  font-family: "miller-display";
  text-transform: capitalize;
  font-size: 25px;
  line-height: 28px;
`;

export const HeadingContainer = styled.div`
  width: ${props => props.small ? "calc(100% - 10px)" : "calc(50% - 10px)"};
  float: left;
  margin: 10px 0;
  margin-left: ${props => props.small ? "0" : "10px"};
  border-bottom: ${props => props.theme.color.colorGrey02} 1px solid;
  &:first-of-type {
    margin-left: 0px;
    margin-right: 10px;
  }
`;

export const Heading = styled.span`
  width: 100%;
  float: left;
  padding: ${props => props.black ? "5px 0" : "0  "};
  color: ${props =>
    props.black
      ? props.theme.color.colorBlack02
      : props.theme.color.colorGrey03};
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
`;

export const PlaceOrderContainer = styled.div`
  height: 56px;
  width: 25%;

  position:fixed;
  bottom: 0;
  right:0;
  padding:10px;
  background-color: #040AB4;
  
  div {
    color: #FFFFFF;
    font-family: ".SF NS Display";
    font-size: 15px;
    line-height: 17px;
  text-align: center;
  }
}`;

export const POMenuHeader = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  padding: 15px 20px;
  z-index: 2;
  background-color: ${props => props.theme.color.colorWhite01};
`;

export const ExpandButton = styled.button`
  position: absolute;
  top: 21px;
  left: ${props => props.right ? "auto" : "10px"};
  right: ${props => props.right ? "10px" : "auto"};
  background-color: transparent;
  border: 0;
  cursor: pointer;
  transition: opacity 0.5s;
  opacity: ${props => props.visible ? "1" : "0"};
  pointer-events: ${props => props.visible ? "auto" : "none"};
  &:focus {
    outline: 0;
  }
`;

export const ScrollWrapper = styled.div`
  overflow: scroll;
  height: calc(100% - 38px);
  padding: 0 20px 20px 20px;
  margin: 38px -20px 0;
`;

export const SmallMenu = styled.div`
  position: absolute;
  display: inline-block;
  width: 100%;
  height: 100%;
  top: 0;
  padding: 20px 20px 54px 20px;
  opacity: 1;
  transition: opacity 0.5s;
  ${props => {
    if (props.menuSize === 3 && !props.delayFadeIn) {
      return `
        opacity: 0;
      `;
    } else if (props.menuSize != 3 && props.delayFadeIn) {
      return `
        opacity: 0;
      `;
    } else if (props.menuSize != 3 && !props.delayFadeIn) {
      return `
        transition-delay: 0.5s;
        opacity: 1;
      `;
    }
  }}
`;

export const BigMenu = styled.div`
  position: absolute;
  display: inline-block;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 1;
  transition: opacity 0.5s;
  ${props => {
    if (props.menuSize === 3) {
      return `
        transition-delay: 0.5s;
        opacity: ${props.delayFadeIn ? "1" : "0"};
      `
    } else if (props.menuSize != 3) {
      return `
        opacity: 0;
      `;
    }
  }}
`;

export const PlaceOrderButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 12px 20px;
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: ${props => props.theme.color.colorBlue01};
  color: ${props => props.theme.color.colorWhite01};
  transition: width 0.5s;
  div:first-of-type {
    font-size: 11px;
    padding-bottom: 5px;
  }
`;
