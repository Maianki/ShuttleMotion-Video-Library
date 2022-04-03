import { createContext, useReducer, useContext } from "react";
import {
  videosOperationsReducer,
  videosOperationsInitialState,
} from "reducers/videos-operations-reducer";
import axios from "axios";
import { LIKES_API, WATCHLATER_API, HISTORY_API } from "utils/APIEndPoints";
import { useAuth } from "./auth-context";

const VideosOperationsContext = createContext(null);

const VideosOperationsProvider = ({ children }) => {
  const {
    auth: { encodedToken },
  } = useAuth();
  const [videosOperations, videosOperationsDispatcher] = useReducer(
    videosOperationsReducer,
    videosOperationsInitialState
  );

  const manageWatchLater = async (video) => {
    let response;
    try {
      if (
        videosOperations.watchLaterVideos.find(({ _id }) => video._id === _id)
      ) {
        response = await axios.delete(`${WATCHLATER_API}/${video._id}`, {
          headers: { authorization: encodedToken },
        });
      } else {
        response = await axios.post(
          WATCHLATER_API,
          {
            video,
          },
          {
            headers: { authorization: encodedToken },
          }
        );
      }

      const { watchlater } = response.data;

      if (response.status === 201 || response.status === 200) {
        videosOperationsDispatcher({
          type: "MANAGE_WATCHLATER",
          payload: watchlater,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const manageVideoLike = async (video) => {
    let response;
    try {
      if (videosOperations.likedVideos.find(({ _id }) => video._id === _id)) {
        response = await axios.delete(`${LIKES_API}/${video._id}`, {
          headers: { authorization: encodedToken },
        });
      } else {
        response = await axios.post(
          LIKES_API,
          {
            video,
          },
          {
            headers: { authorization: encodedToken },
          }
        );
      }

      const { likes } = response.data;

      if (response.status === 201 || response.status === 200) {
        videosOperationsDispatcher({ type: "MANAGE_LIKES", payload: likes });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const manageDeleteHistory = async (id) => {
    try {
      const response = await axios.delete(`${HISTORY_API}/${id}`, {
        headers: { authorization: encodedToken },
      });

      const { history } = response.data;

      if (response.status === 200) {
        videosOperationsDispatcher({
          type: "MANAGE_HISTORY",
          payload: history,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const manageDeleteHistoryAll = async (id) => {
    try {
      const response = await axios.delete(`${HISTORY_API}/all`, {
        headers: { authorization: encodedToken },
      });

      const { history } = response.data;

      if (response.status === 200) {
        videosOperationsDispatcher({
          type: "MANAGE_HISTORY",
          payload: history,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <VideosOperationsContext.Provider
      value={{
        videosOperations,
        videosOperationsDispatcher,
        manageVideoLike,
        manageWatchLater,
        manageDeleteHistory,
        manageDeleteHistoryAll,
      }}
    >
      {children}
    </VideosOperationsContext.Provider>
  );
};

const useVideosOperations = () => useContext(VideosOperationsContext);
export { VideosOperationsProvider, useVideosOperations };
