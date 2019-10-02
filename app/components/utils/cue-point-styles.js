import styled from "styled-components";


export const ImageThumbnail = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 36px;
  background-image: url(${props => props.thumbnail});
  transform: translate(calc(-50% + 7px), calc(-50% + 7px));
  border: ${props =>
    props.showRedBorder
      ? `1px solid ${props.theme.color.colorRed02}`
      : "1px solid white"};
  opacity: ${props => (props.expanded ? "1" : "0")};
  transition: opacity 0.5s;
  background-size: cover;
  background-position: center;
`;


export const CueText = styled.h2`
  position: relative;
  display:none;
  color:white;
  left: -50%;
  top:-65px;
  font-style: italic;
  width:100%;
  width:max-content
`;


export const CuePointMarker = styled.div`
  position: absolute;;
  top:0;
  @-moz-document url-prefix() {
    top: 7px;
  }
  width: 14px;
  height: 14px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${props =>
  props.showRedBorder
    ? props.theme.color.colorRed02
    : props.hover
    ? "#FFFFFF"
    : "#606060"};
  transition: background-color 0.5s;
`;


export const CuePointWrapper = styled.div`
  position: absolute;
  top: 19px;
  left: ${props => props.left}%;
  @media (hover: hover) {
    &:hover ${ImageThumbnail} {
      opacity: 1;
    }
    
    &:hover ${CueText} {
       display:block;
    }
  }
`;




