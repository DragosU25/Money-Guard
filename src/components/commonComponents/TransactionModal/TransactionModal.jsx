import { useEffect, useRef } from "react";
import styles from "./TransactionModal.module.css";

const TransactionModal = ({ children, closeModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const addCloseEvent = (event) => {
      if (event.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", addCloseEvent);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", addCloseEvent);
    };
  }, [closeModal]);

  const closeOnClickOutside = (event) => {
    if (event.target === event.currentTarget) closeModal();
  };

  return (
    <div ref={modalRef} className={styles.modal} onClick={closeOnClickOutside}>
      <div className={styles.modalBg}>{children}</div>
    </div>
  );
};

export default TransactionModal;
