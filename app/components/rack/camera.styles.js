import styled from 'styled-components';

export const CameraWrapper = styled.div`
  ${props => {
    if (props.displayVideoStream) {
      return `
        ${Thumbnail} {
          display: inline-block;
        }
        ${TakePhotoButton} {
          display: inline-block;
        }
        ${Video} {
          display: inline-block;
        }
      `
    }
  }}
`;

export const CameraIcon = styled.img`
  position: fixed;
  bottom: 0;
  left: 15px;
  bottom: 65px;
  cursor: pointer;
  z-index: 2;
`;

export const Thumbnail = styled.img`
  position: absolute;
  display: none;
  bottom: 0;
  height: 159px;
  width: 159px;
  margin-left: 112.5px;
  margin-bottom: 75px;
  border: 1px dashed ${props => props.theme.color.colorBlue01};
  background-color: rgba(255,255,255,0.6);
  z-index: 1;
`;

export const TakePhotoButton = styled.button`
  position: absolute;
  display: none;
  bottom: 0;
  left: 0;
  margin: 0 0 25px 140px;
  height: 32px;
  width: 100px;
  background-color: ${props => props.theme.color.colorBlue01};
  border: none;
  color: ${props => props.theme.color.colorWhite01};
`;

export const Video = styled.video`
  display: none;
  width: 100vw;
`;

export const Canvas = styled.canvas`
  display: none;
  width: 100vw;
  height: 100vh;
`;

