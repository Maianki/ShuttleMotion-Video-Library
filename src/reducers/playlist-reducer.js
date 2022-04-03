export const playlistsInitialState = {
  playlists: [],
};

export const playlistsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_PLAYLIST":
      return;

    case "REMOVE_FROM_PLAYLIST":
      return;
    default:
      throw Error("Unknown action.");
  }
};
