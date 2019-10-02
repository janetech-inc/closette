import { useSpring } from "react-spring";
import {
  ModalWrapper,
  ModalInnerWrapper,
  BackgroundOverlay
} from "./modal-styles";

const Modal = ({ children, active, onClose }) => {
  const modalAnimation = useSpring({
    opacity: active ? 1 : 0,
    transform: active ? "translateY(-50%)" : "translateY(-52%)"
  });

  const overlayAnimation = useSpring({
    backgroundColor: active ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0)"
  });

  return (
    <ModalWrapper isActive={active}>
      <BackgroundOverlay onClick={() => onClose()} style={overlayAnimation} />
      <ModalInnerWrapper style={modalAnimation}>{children}</ModalInnerWrapper>
    </ModalWrapper>
  );
};

export default Modal;
