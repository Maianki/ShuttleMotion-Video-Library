import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useAuth } from "./auth-context";

import {
  playlistsInitialState,
  playlistsReducer,
} from "reducers/playlist-reducer";
import { useSnackbar } from "./snackbar-context";
import { PLAYLISTS_API } from "utils/APIEndPoints";

const PlaylistsContext = createContext(null);

const PlaylistsProvider = ({ children }) => {
  const { addSnackbar } = useSnackbar();
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
        addSnackbar(
          `Video added to the playlist - ${playlist.title}`,
          "snackbar-info"
        );
      }
    } catch (err) {}
  };

  const managePlaylist = async (playlist, video = "") => {
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

        if (video) {
          const playlistId = playlists[playlists.length - 1]._id;
          addVideoToPlaylist(playlistId, video);
        }

        console.log(playlists);
      }
    } catch (err) {
      const { status, data } = err.response;
      if (status === 500 && data.message === "Invalid token specified") {
        addSnackbar("Please login to create playlist", "snackbar-danger");
      }
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
        addSnackbar("Playlist deleted", "snackbar-danger");
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
        addSnackbar(
          `Video deleted from playlist - ${playlist.title}`,
          "snackbar-danger"
        );
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
