// import { useSnackbarContext } from "context";
// import { useEffect } from "react";
// import { v4 as uuid } from "uuid";

// export function useSnackbar() {
//   const { snackbarDispatcher } = useSnackbarContext();
//   const toastId = uuid();

//   // useEffect(() => {
//   //   const timerId = setTimeout(() => {
//   //     snackbarDispatcher({ type: "DELETE_SNACKBAR", payload: toastId });
//   //   }, 1000);

//     return () => clearTimeout(timerId);
//   }, [snackbarDispatcher, toastId]);

//   const snackbar = (message, type) => {
//     snackbarDispatcher({
//       type: "ADD_SNACKBAR",
//       payload: { toastId, type, message },
//     });
//   };

//   const deleteSnackbar = () => {};

//   return [snackbar, deleteSnackbar];
// }
