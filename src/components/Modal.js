import React from 'react';
import "../styles/components/Modal.css"

function Modal(props) {
  return (
    <div className={'modalBody'}>
      <div className={'modalTitle'}>
        Drinks On Me
      </div>
      <div className={'modalPrompt'}>
        Are you 21+ years old?
        <div className={'modalPromptButtons'}>
          <button className={'primaryButton'}>Yes</button>
          <button className={'secondaryButton'}>No</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;