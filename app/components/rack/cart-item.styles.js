import styled from 'styled-components';
import CloseIcon from "../icons/close";
import { animated } from "react-spring";

export const FilteredItem = React.forwardRef(({isDragging, ...otherProps}, ref) => <animated.div {...otherProps} ref={ref}/>);

export const Item = styled(FilteredItem)`
  position: relative;
  display: block;
  width: 100%;
  border: 1px solid ${props => props.theme.color.colorGrey01};
  box-shadow: 1px 2px 4px 0 rgba(74,74,74,0.1);
  margin-top: 10px;
  overflow: hidden;

  ${props => {
    if (props.isDragging && !props.clonedItem) {
      return `
        border: 0;
        box-shadow: 0 0 0 0;
        overflow: visible;
        width: 300px !important;
        height: 680px !important;
        ${Image} {
          transition-property: none;
          width: 100%;
          height: 100%;
          background-size: 430px auto;
        }
      `
    }
  }}

  }
`;

export const ItemInfo = styled.div`
  position: relative;
  display: block;
  pointer-events: none;
  ${props => {
    if (props.thumbnail) {
      return `
        ${SizeContainer} {
          height: 0;
          padding: 0;
        }
        ${MaterialContainer} {
          height: 0;
          padding: 0;
        }
      `;
    }
  }}
`;

export const Image = styled.div`
  display: inline-block;
  width: ${props => props.thumbnail ? "190px" : "110px"};
  height: ${props => props.thumbnail ? "190px" : "110px"};
  margin: 10px 0;
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  transition: width 0.5s, height 0.5s;
  
  ${props => {
    if (props.clonedItem) {
      return `
        transition-property: none;
      `;
    }
  }}
`;

export const InfoHeader = styled.div`
  position: absolute;
  display: inline-block;
  right: 0;
  top: 10px;
  width: 200px;
  opacity: ${props => props.thumbnail ? "0" : "1"};
  transform: ${props => props.thumbnail ? "translateX(110%)" : "translateX(0%)" };
  transition: transform 0.5s, opacity 0.5s;
  pointer-events: none;
`;

export const Name = styled.span`
  display: block;
  color: ${props => props.theme.color.colorBlack02};
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
`;

export const Details = styled.span`
  display: block;
  color: ${props => props.theme.color.colorBlack02};
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 300;
  line-height: 14px;
`;

export const Size = styled.span`
  display: block;
  color: ${props => props.quantity ? props.theme.color.colorGrey03 : props.theme.color.colorBlack02};
  font-family: "Helvetica Neue";
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
`;

export const StyledCloseButton = styled(CloseIcon)`
  position: absolute;
  right: 2px;
  top: 10px;
  z-index: 1;
`

export const MaterialContainer = styled.div`
  background-color: ${props => props.theme.color.colorWhite01};
  color: ${props => props.theme.color.colorBlack02};
  width: 100%;
  height: 33px;
  line-height: 13px;
  padding: 10px 12px;
  float: left;
  transition: height 0.5s;
`;

export const SizeContainer = styled.div`
  background-color: ${props => props.theme.color.colorWhite02};
  width: 100%;
  display: flex;
  height: 60px;
  padding: 10px;
  transition: height 0.5s;
  overflow: hidden;
  border-bottom: 1px solid ${props => props.theme.color.colorGrey01};
`;

export const SizeWrapper = styled.div`
  flex-basis: 0;
  flex-grow: 1;
`;

