export const playlistsInitialState = {
  playlists: [],
};

export const playlistsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "MANAGE_PLAYLIST":
      return { ...state, playlists: payload };

    case "ADD_VIDEO_TO_PLAYLIST":
      const { _id: playlistId } = payload;
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === playlistId ? payload : playlist
        ),
      };

    case "DELETE_VIDEO_FROM_PLAYLIST":
      const { _id: playlistID } = payload;
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === playlistID ? payload : playlist
        ),
      };

    case "RESET_PLAYLISTS":
      return playlistsInitialState;

    default:
      throw Error("Unknown action.");
  }
};
