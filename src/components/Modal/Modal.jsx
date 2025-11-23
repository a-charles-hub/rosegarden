import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

function Modal({ children, onClose }) {
  const modalRef = useRef(null);

  // Close when clicking outside  
  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div ref={modalRef} className={styles.dropdown}>
      {children}
    </div>
  );
}

export default Modal;
