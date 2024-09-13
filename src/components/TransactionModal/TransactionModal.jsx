import React from "react";
import styles from "./TransactionModal.modukle.css";
const TransactionModal = ({ children, closeModal }) => {
  return (
    <div className={styles.modalBackdrop} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default TransactionModal;
