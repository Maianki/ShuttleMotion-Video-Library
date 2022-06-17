import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer, authInitialState } from "reducers/auth-reducer";
import { LOGIN_API, SIGNUP_API } from "utils/APIEndPoints";
import { useNavigate, useLocation } from "react-router-dom";
import { useSnackbar } from "./snackbar-context";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [auth, authDispatcher] = useReducer(authReducer, authInitialState);
  const navigate = useNavigate();
  const location = useLocation();
  const { addSnackbar } = useSnackbar();
  const handleSignup = async (userInfo) => {
    const { firstName, lastName, email, password, confirmPassword } = userInfo;

    try {
      const response = await axios.post(SIGNUP_API, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });

      const { encodedToken } = response.data;

      // saving the encodedToken in the localStorage
      localStorage.setItem("token", JSON.stringify(encodedToken));

      if (response.status === 201) {
        authDispatcher({
          type: "LOGGED_IN",
          payload: encodedToken,
        });
        const {
          createdUser: { firstName },
        } = response.data;
        addSnackbar(`${firstName} logged in.`, "snackbar-info");
        navigate(location?.state?.from?.pathname ?? "/", { replace: true });
      }
    } catch (error) {
      const { status } = error.response;
      if (status === 422) {
        addSnackbar("Email already exsist", "snackbar-danger");
      } else {
        addSnackbar(`${error.message}`, "snackbar-danger");
      }
    }
  };

  useEffect(() => {
    const encodedToken = JSON.parse(localStorage.getItem("token"));
    authDispatcher({
      type: "LOGGED_IN",
      payload: encodedToken,
    });
  }, []);

  const handleSignIn = async (userInfo) => {
    const { email, password } = userInfo;
    try {
      const response = await axios.post(LOGIN_API, {
        email,
        password,
      });
      const { encodedToken } = response.data;

      // saving the encodedToken in the localStorage
      localStorage.setItem("token", JSON.stringify(encodedToken));

      if (response.status === 200) {
        authDispatcher({
          type: "LOGGED_IN",
          payload: encodedToken,
        });

        const {
          foundUser: { firstName },
        } = response.data;
        addSnackbar(`${firstName} logged in.`, "snackbar-info");

        navigate(location?.state?.from?.pathname ?? "/", { replace: true });
      }
    } catch (error) {
      const { status } = error.response;
      if (status === 404) {
        addSnackbar("This email is not registered", "snackbar-danger");
      } else if (status === 401) {
        addSnackbar(
          "You entered incorrect email or password",
          "snackbar-danger"
        );
      } else {
        addSnackbar(`${error.message}`, "snackbar-danger");
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        authDispatcher,
        handleSignIn,
        handleSignup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
