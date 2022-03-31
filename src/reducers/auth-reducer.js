export const authInitialState = {
  isAuthenticated: false,
  encodedToken: "",
};

export const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGGED_IN":
      return {
        ...state,
        encodedToken: payload,
        isAuthenticated: true,
      };

    case "LOGGED_OUT":
      return authInitialState;
    default:
      throw Error("Unknown action.");
  }
};
