const ModalTrigger = ({buttonRef, open, text}) => <button onClick={open} ref={buttonRef} className="modal-trigger">{text}</button>;

export default ModalTrigger;