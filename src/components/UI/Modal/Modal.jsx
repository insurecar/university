import { useEffect, useRef } from "react";
import styles from "./Modal.module.scss";
import CloseIcon from "../../../assets/CloseIcon.svg?react";

export const Modal = ({ children, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal} ref={modalRef}>
        <button className={styles.closeButton} onClick={onClose}>
          <CloseIcon className={styles.closeIcon} />
        </button>
        {children}
      </div>
    </div>
  );
};
