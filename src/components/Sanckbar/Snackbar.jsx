import React from "react";
import { ImCross } from "react-icons/im";
import { useEffect } from "react";
import styles from "./snackbar.module.css";
import { useSnackbarContext } from "context";
import { useSnackbar } from "hooks";

export function Snackbar() {
  const {
    snackbarState: { snackbars },
    snackbarDispatcher,
  } = useSnackbarContext();

  // const [deleteSnackbar] = useSnackbar();

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     deleteSnackbar();
  //   }, 1000);

  //   return () => clearTimeout(timerId);
  // }, [deleteSnackbar]);

  return (
    <>
      <section className={styles.snackbarContainer}>
        {snackbars &&
          snackbars.map(({ message, type, toastId }) => {
            return (
              <div
                key={toastId}
                className={`snackbar flex-row ${type} ${styles.shuttleMotionSnackbar} pd-1 md-vt-1`}
              >
                <p className='md-ht-2'>{message}</p>
                <span
                  className='btn-snackbar-cancel md-ht-2'
                  onClick={() =>
                    snackbarDispatcher({
                      type: "DELETE_SNACKBAR",
                      payload: toastId,
                    })
                  }
                  role='button'
                >
                  <ImCross className='snackbar-dismiss' />
                </span>
              </div>
            );
          })}
      </section>
    </>
  );
}
