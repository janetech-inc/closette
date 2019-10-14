import FocusTrap from 'focus-trap-react';
import './ModalContent.scss';

import Portal from '../Portal';

const ModalContent = ({
  close,
  onClickBackdrop, 
  onKeyDown,
  content, 
  ariaLabel, 
  role, 
  modalRef, 
  buttonRef
}) => (
  <Portal selector="#modal">
    <FocusTrap>
      <aside 
        className="modal-backdrop"
        aria-modal="true" 
        aria-label={ariaLabel} 
        role={role} 
        tabIndex="-1" 
        onClick={onClickBackdrop}
        onKeyDown={onKeyDown}
      >
        <div className="modal-content" ref={modalRef}>
          <button className="modal-close" aria-labelledby="close-modal" onClick={close}>
            <span id="close-modal" className="u-hide-visually">Close x</span>
          </button>
          <div className="modal-body">
            {content}
          </div>
        </div>
      </aside>
    </FocusTrap>
  </Portal>
);

export default ModalContent;