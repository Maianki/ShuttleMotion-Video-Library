import { createContext, useReducer, useContext } from "react";
import {
  videosOperationsReducer,
  videosOperationsInitialState,
} from "reducers/videos-operations-reducer";
import axios from "axios";
import { LIKES_API, WATCHLATER_API } from "utils/APIEndPoints";
import { useAuth } from "./auth-context";

const videosOperationsContext = createContext(null);

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
        videosOperations.watchLaterVideos.some(({ _id }) => video._id === _id)
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
      if (videosOperations.likedVideos.some(({ _id }) => video._id === _id)) {
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

  return (
    <videosOperationsContext.Provider
      value={{
        videosOperations,
        videosOperationsDispatcher,
        manageVideoLike,
        manageWatchLater,
      }}
    >
      {children}
    </videosOperationsContext.Provider>
  );
};

const useVideosOperations = () => useContext(videosOperationsContext);
export { VideosOperationsProvider, useVideosOperations };
