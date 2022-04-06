import { createContext, useContext, useReducer, useEffect } from "react";
import {
  snackbarInitialState,
  snackbarReducer,
} from "reducers/snackbar-reducer";
import { v4 as uuid } from "uuid";

const SnackbarContext = createContext(null);

const SnackbarProvider = ({ children }) => {
  const [snackbarState, snackbarDispatcher] = useReducer(
    snackbarReducer,
    snackbarInitialState
  );

  const toastId = uuid();
  const snackbar = (message, type) => {
    snackbarDispatcher({
      type: "ADD_SNACKBAR",
      payload: { toastId, type, message },
    });
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      snackbarDispatcher({ type: "DELETE_SNACKBAR", payload: toastId });
    }, 1000);

    return () => clearTimeout(timerId);
  }, [toastId, snackbarDispatcher]);

  return (
    <SnackbarContext.Provider
      value={{ snackbarState, snackbar, snackbarDispatcher }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};

const useSnackbarContext = () => useContext(SnackbarContext);

export { SnackbarProvider, useSnackbarContext };
