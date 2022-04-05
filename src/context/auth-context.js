import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer, authInitialState } from "reducers/auth-reducer";
import { LOGIN_API, SIGNUP_API } from "utils/APIEndPoints";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [auth, authDispatcher] = useReducer(authReducer, authInitialState);
  const navigate = useNavigate();
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

        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log(error);
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

        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log(error);
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
