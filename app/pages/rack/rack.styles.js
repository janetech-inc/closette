import styled from "styled-components";

export const RackContent = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("${props => props.backgroundUrl}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow-x: scroll;
  overflow-y: hidden;
`;

export const DraggableArea = styled.div`
  height: 100vh;
  position: absolute;
`;

export const RackBar = styled.div`
  position: relative;
  display: flex;
  top: 15%;
  width: 100%;
  height: 100%;
  background-image: url("https://res.cloudinary.com/cxn-fashion/image/upload/v1558985804/rack_bar_rbj6la.svg");
  background-repeat: repeat-x;
`;

export const HangerContainer = styled.div`
  position: absolute;
  top: -5px;
  width: 300px;
`;

export const ThemeHeader = styled.div`
  position: fixed;
  bottom: 0;
  margin-bottom: 60px; //45px from designs + 15px;

  /* font-family: Helvetica Neue; */
  line-height: 29px;
  font-weight: bold;
  color: ${props => props.theme.color.colorBlue01};
  letter-spacing: inherit;
  text-transform: capitalize;
  font-size: 14px;

  /* Text Rotation: Browser Support */
  transform: rotate(-90deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
`;

export const ThemeImage = styled.div`
  position: fixed;
  left:15px;
  bottom: 90px;
  width:32px;
  height: 32px;
  background-image:url("${props => props.url}");
  background-size:cover;
  cursor:pointer;
  border: 1px solid transparent;
  &.active, &:hover {
    border: 1px solid #040AB4; 
  }

`;

