export const playlistsInitialState = {
  playlists: [],
};

export const playlistsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "MANAGE_PLAYLIST":
      return { ...state, playlists: payload };

    case "REMOVE_FROM_PLAYLIST":
      return;
    default:
      throw Error("Unknown action.");
  }
};
