import axios from "axios";
import { VIDEOS_API, CATEGORIES_API } from "utils/APIEndPoints";
import { createContext, useContext, useReducer, useEffect } from "react";
import {
  videosAndCategoryInitialState,
  videosAndCategoryReducer,
} from "reducers/videos-and-category-reducer";

const VideosAndCategoryContext = createContext(null);

const VideosAndCategoryProvider = ({ children }) => {
  const [videosAndCategory, videosAndCategoryDispatcher] = useReducer(
    videosAndCategoryReducer,
    videosAndCategoryInitialState
  );

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(VIDEOS_API);
        if (response.status === 200) {
          const {
            data: { videos },
          } = response;
          videosAndCategoryDispatcher({
            type: "INITIALIZE_VIDEOS",
            payload: videos,
          });
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(CATEGORIES_API);
        if (response.status === 200) {
          const {
            data: { categories },
          } = response;
          videosAndCategoryDispatcher({
            type: "INITIALIZE_CATEGORIES",
            payload: categories,
          });
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <VideosAndCategoryContext.Provider
      value={{ videosAndCategoryDispatcher, videosAndCategory }}
    >
      {children}
    </VideosAndCategoryContext.Provider>
  );
};

const useVideosAndCategories = () => useContext(VideosAndCategoryContext);

export { VideosAndCategoryProvider, useVideosAndCategories };
