import { v4 as uuid } from "uuid";

export const emptyPlaceholderData = [
  {
    _id: uuid(),
    route: "playlist",
    heading: "Create a playlist",
    description:
      "Start creating your playlists. The playlists will show up here.",
  },
  {
    _id: uuid(),
    route: "history",
    heading: "No videos in history",
    description: "Watch videos. The videos you watch will show up here.",
  },
  {
    _id: uuid(),
    route: "watch-later",
    heading: "No videos in watch later",
    description: "The videos you save for watch later will show up here.",
  },
  {
    _id: uuid(),
    route: "liked",
    heading: "No videos in like",
    description: "Like videos. The videos you like will show up here.",
  },
];
