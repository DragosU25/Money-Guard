import React from "react";
import PropTypes from "prop-types";
import { HiX } from "react-icons/hi";

import styles from "./Modal.module.css";

function Modal({
  isModalVisible,
  handleModalClose,
  children,
  dialogRef,
  contRef,
}) {
  if (!isModalVisible) {
    return;
  }

  return (
    isModalVisible && (
      <dialog ref={dialogRef} className={styles.modalClassName}>
        <div ref={contRef} className={styles.content}>
          <button
            className={styles.closeModal}
            id="closeModal"
            onClick={handleModalClose}>
            <HiX size="16px" />
          </button>
          {children}
        </div>
      </dialog>
    )
  );
}

Modal.propTypes = {
  isModalVisible: PropTypes.bool,
  handleModalClose: PropTypes.func,
  handleChange: PropTypes.func,
  handleSave: PropTypes.func,
  dialogRef: PropTypes.object,
  contRef: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default Modal;
