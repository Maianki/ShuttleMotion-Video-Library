import { createContext, useContext, useReducer } from "react";
import {
  snackbarInitialState,
  snackbarReducer,
} from "reducers/snackbar-reducer";
import { v4 as uuid } from "uuid";
import { Snackbar } from "components";

const SnackbarContext = createContext(null);

const SnackbarProvider = ({ children }) => {
  const [snackbarState, snackbarDispatcher] = useReducer(
    snackbarReducer,
    snackbarInitialState
  );
  
  const addSnackbar = (message, type) => {
    const toastId = uuid();
    snackbarDispatcher({
      type: "ADD_SNACKBAR",
      payload: { toastId, type, message },
    });
  };

  const removeSnackbar = (toastId) => {
    snackbarDispatcher({ type: "DELETE_SNACKBAR", payload: toastId });
  };

  return (
    <SnackbarContext.Provider
      value={{ snackbarState, addSnackbar, removeSnackbar, snackbarDispatcher }}
    >
      {children}
      <section className='snackbar-container'>
        {snackbarState.snackbars &&
          snackbarState.snackbars.map(({ message, type, toastId }) => {
            return (
              <Snackbar
                key={toastId}
                message={message}
                type={type}
                handleRemoveSnackbar={() => removeSnackbar(toastId)}
              />
            );
          })}
      </section>
    </SnackbarContext.Provider>
  );
};

const useSnackbar = () => useContext(SnackbarContext);

export { SnackbarProvider, useSnackbar };
