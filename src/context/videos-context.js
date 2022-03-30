import { createContext, useContext } from "react";

const VideoContext = createContext(null);

const VideoProvider = ({ children }) => {
  return <VideoContext.Provider>{children}</VideoContext.Provider>;
};

const useVideo = () => useContext(VideoContext);

export { VideoProvider, useVideo };
