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

  const addVideoToPlaylist = async (playlistId, video) => {
    try {
      const response = await axios.post(
        `${PLAYLISTS_API}/${playlistId}`,
        { video },
        {
          headers: { authorization: encodedToken },
        }
      );

      const { playlist } = response.data;
      if (response.status === 201) {
        playlistsDispatcher({
          type: "ADD_VIDEO_TO_PLAYLIST",
          payload: playlist,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const managePlaylist = async (playlist, video) => {
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
        const playlistId = playlists[playlists.length - 1]._id;
        addVideoToPlaylist(playlistId, video);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deletePlaylist = async (playlistId) => {
    try {
      const response = await axios.delete(`${PLAYLISTS_API}/${playlistId}`, {
        headers: { authorization: encodedToken },
      });

      const { playlists } = response.data;
      if (response.status === 200) {
        playlistsDispatcher({
          type: "MANAGE_PLAYLIST",
          payload: playlists,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteVideoFromPlaylist = async (playlistId, videoId) => {
    try {
      const response = await axios.delete(
        `${PLAYLISTS_API}/${playlistId}/${videoId}`,
        {
          headers: { authorization: encodedToken },
        }
      );

      const { playlist } = response.data;
      if (response.status === 200) {
        playlistsDispatcher({
          type: "DELETE_VIDEO_FROM_PLAYLIST",
          payload: playlist,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PlaylistsContext.Provider
      value={{
        playlists,
        playlistsDispatcher,
        managePlaylist,
        addVideoToPlaylist,
        deletePlaylist,
        deleteVideoFromPlaylist,
      }}
    >
      {children}
    </PlaylistsContext.Provider>
  );
};

const usePlaylists = () => useContext(PlaylistsContext);

export { PlaylistsProvider, usePlaylists };
