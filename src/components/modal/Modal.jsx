import React from 'react';
import styles from "./Modal.module.css"

function Modal(props) {
  return (
    
    <div className={styles.modalBody}>
      <div className={styles.modalTitle}>
        Drinks On Me
      </div>
      <div className={styles.modalPrompt}>
        Are you 21+ years old?
        <div className={styles.modalPromptButtons}>
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;