import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useAuth } from "./auth-context";
import {
  playlistsInitialState,
  playlistsReducer,
} from "reducers/playlist-reducer";
import { PLAYLISTS_API } from "utils/APIEndPoints";

const PlaylistsContext = createContext(null);

const PlaylistsProvider = ({ children }) => {
  const [playlists, playlistsDispatcher] = useReducer(
    playlistsReducer,
    playlistsInitialState
  );

  const {
    auth: { encodedToken },
  } = useAuth();

  const managePlaylist = async (playlist) => {
    try {
      const response = await axios.post(
        PLAYLISTS_API,
        { playlist },
        {
          headers: { authorization: encodedToken },
        }
      );

      const { playlists } = response.data;
      if (response.status === 201) {
        playlistsDispatcher({
          type: "MANAGE_PLAYLIST",
          payload: playlists,
        });
      }
      console.log(playlists);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PlaylistsContext.Provider
      value={{ playlists, playlistsDispatcher, managePlaylist }}
    >
      {children}
    </PlaylistsContext.Provider>
  );
};

const usePlaylists = () => useContext(PlaylistsContext);

export { PlaylistsProvider, usePlaylists };
