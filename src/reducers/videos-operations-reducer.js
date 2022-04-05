export const videosOperationsInitialState = {
  likedVideos: [],
  watchLaterVideos: [],
  historyVideos: [],
};

export const videosOperationsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "MANAGE_LIKES":
      return { ...state, likedVideos: payload };

    case "MANAGE_WATCHLATER":
      return { ...state, watchLaterVideos: payload };

    case "MANAGE_HISTORY":
      return { ...state, historyVideos: payload };

    case "RESET_VIDEO_OPERATIONS_REDUCER":
      return videosOperationsInitialState;

    default:
      throw Error("Unknown action.");
  }
};
