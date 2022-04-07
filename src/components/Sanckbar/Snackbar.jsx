import React from "react";
import { ImCross } from "react-icons/im";
import { useEffect } from "react";
import styles from "./snackbar.module.css";

export function Snackbar({ message, type, handleRemoveSnackbar }) {
  useEffect(() => {
    const timerId = setTimeout(() => {
      handleRemoveSnackbar();
    }, 1500);

    return () => clearTimeout(timerId);
  }, [handleRemoveSnackbar]);

  return (
    <div
      className={`snackbar flex-row ${type} ${styles.shuttleMotionSnackbar} pd-1 md-vt-1`}
    >
      <p className='md-ht-2'>{message}</p>
      <span
        className='btn-snackbar-cancel md-ht-2'
        onClick={handleRemoveSnackbar}
        role='button'
      >
        <ImCross className='snackbar-dismiss' />
      </span>
    </div>
  );
}
