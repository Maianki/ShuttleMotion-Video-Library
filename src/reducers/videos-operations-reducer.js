export const videosOperationsInitialState = {
  likedVideos: [],
  watchLaterVideos: [],
};

export const videosOperationsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "MANAGE_LIKES":
      return { ...state, likedVideos: payload };

    case "MANAGE_WATCHLATER":
      return { ...state, watchLaterVideos: payload };

    default:
      throw Error("Unknown action.");
  }
};
