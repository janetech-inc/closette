import React, { useEffect, useRef, useState } from "react";
import {
  CameraWrapper,
  CameraIcon,
  Thumbnail,
  TakePhotoButton,
  Video,
  Canvas
} from "./camera.styles";
import { gaTrackRackEvents, RackEventsTypes } from "../../utils/ga_analytics";

const Camera = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [mediaStream, setMediaStream] = useState(undefined);
  const [displayVideoStream, setDisplayVideoStream] = useState(false);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const thumbnailRef = useRef(null);
  const backgroundRef = useRef(null);

  // --- LifeCycle Hooks ---

  useEffect(() => {
    showCamera ? activateWebcam() : stopWebcam();
  }, [showCamera]);

  // --- UI Delegates ---

  const takePhoto = () => {
    let image = getImageFromVideo();
    thumbnailRef.current.setAttribute("src", image);
  };

  const displayBackgroundPhoto = () => {
    backgroundRef.current.height = videoRef.current.scrollHeight;
    backgroundRef.current.width = videoRef.current.scrollWidth;
    backgroundRef.current.setAttribute("src", thumbnailRef.current.src);
    stopWebcam();
  };

  // --- Render UI ---

  return (
    <CameraWrapper displayVideoStream={displayVideoStream}>
      <CameraIcon
        src="static/camera-icon.svg"
        alt="Camera Button - Click to Take Background Photo"
        onClick={() => {gaTrackRackEvents(RackEventsTypes.Rack, 'Camera Opened'); setShowCamera(!showCamera)}}
        onMouseEnter={e =>
          (e.currentTarget.src = "static/camera-icon-active.svg")
        }
        onMouseLeave={e => (e.currentTarget.src = "static/camera-icon.svg")}
      />

      <Thumbnail ref={thumbnailRef} onClick={displayBackgroundPhoto} />
      <Video ref={videoRef} />
      <TakePhotoButton onClick={()=>{takePhoto(); gaTrackRackEvents(RackEventsTypes.Rack, 'Take a photo');}}>Take A Photo</TakePhotoButton>

      <Canvas ref={canvasRef} />
      <img ref={backgroundRef} />
    </CameraWrapper>
  );

  // --- Helper Methods ---

  function activateWebcam() {
    if (navigator && navigator.mediaDevices) {
      getUserMedia()
        .then(stream => {
          setMediaStream(stream);
          activateCameraStream(stream);
          setDisplayVideoStream(true);
        })
        .catch(() => {
          alert("Webcam access is required for this feature.");
        });
      } else {
        alert("Feature is not supported with your browser or device.");
      }
  }

  function stopWebcam() {
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => track.stop());
    }
    setDisplayVideoStream(false);
    setShowCamera(false);
  }

  function getUserMedia() {
    return navigator.mediaDevices.getUserMedia({ video: true, audio: false });
  }

  function activateCameraStream(stream) {
    videoRef.current.srcObject = stream;
    videoRef.current.play();
  }

  function getImageFromVideo() {
    let canvasElement = canvasRef.current;
    let context = canvasElement.getContext("2d");
    canvasElement.width = videoRef.current.scrollWidth;
    canvasElement.height = videoRef.current.scrollHeight;
    context.drawImage(
      videoRef.current,
      0,
      0,
      videoRef.current.scrollWidth,
      videoRef.current.scrollHeight
    );

    return canvasElement.toDataURL("image/png");
  }
};

export default Camera;
