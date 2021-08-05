import React from 'react';
import "../styles/components/Modal.css"

function Modal(props) {



  const clickHandlerYes= () => {
    props.setOfAge(true)
  }
  const clickHandlerNo = () => {
    props.setOfAge(false)
  }
  return (
    <div className='bodyClassContainerModal'>
      <div className={'modalContainer'}>
        <h4>Drinks On Me</h4>
        <div className={'modalPrompt'}>
          Are you 21+ years old?
          <div className={'modalPromptButtons'}>
            <button className={'yesButton'} onClick={clickHandlerYes}>Yes</button>
            <button className={'noButton'} onClick={clickHandlerNo}>No</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;