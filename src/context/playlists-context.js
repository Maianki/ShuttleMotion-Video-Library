import { createContext, useContext, useReducer } from "react";
import {
  playlistsInitialState,
  playlistsReducer,
} from "reducers/playlist-reducer";

const PlaylistsContext = createContext(null);

const PlaylistsProvider = ({ children }) => {
  const [playlists, playlistsDispatcher] = useReducer(
    playlistsReducer,
    playlistsInitialState
  );
  return (
    <PlaylistsContext.Provider value={(playlists, playlistsDispatcher)}>
      {children}
    </PlaylistsContext.Provider>
  );
};

const usePlaylists = () => useContext(PlaylistsContext);

export { PlaylistsProvider, usePlaylists };
