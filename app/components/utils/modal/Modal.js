import React, { Fragment } from "react";
import ModalTrigger from "./ModalTrigger";
import ModalContent from "./ModalContent";

class Modal extends React.Component {
  constructor () {
    super(...arguments)
    this.state = { isOpen: false }
  }

  open = () => {
    this.setState({ isOpen: true });
    this.toggleScrollLock();
  }

  close = () => {
    this.setState({ isOpen: false });
    this.openButtonNode.focus();
    this.toggleScrollLock();
  }

  onClickBackdrop = (e) => {
    if (this.modalNode && this.modalNode.contains(e.target)) return;
    this.close();
  };

  onKeyDown = ({keyCode}) => keyCode === 27 && this.close();

  toggleScrollLock = () => document.querySelector('html').classList.toggle('u-lock-scroll');

  render() {
    const { isOpen } = this.state;
    const { children, triggerText, ariaLabel, role, modalTriggerContent } = this.props;

    return(
      <Fragment>
        <ModalTrigger open={this.open} text={triggerText} buttonRef={node => this.openButtonNode = node} content={modalTriggerContent} />
        {isOpen && (
          <ModalContent 
            close={this.close}
            onKeyDown={this.onKeyDown}
            ariaLabel={ariaLabel} 
            role={role} 
            content={children}
            modalRef={node => this.modalNode = node}
            onClickBackdrop={this.onClickBackdrop}
          />
        )}
      </Fragment>
    )
  }
}

export default Modal;