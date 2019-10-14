const ModalTrigger = ({buttonRef, open, text}) => <button onClick={open} ref={buttonRef}>{text}</button>;

export default ModalTrigger;