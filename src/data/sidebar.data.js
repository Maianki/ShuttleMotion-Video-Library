import { BsStopwatch } from "react-icons/bs";
import { MdPlaylistPlay } from "react-icons/md";
import { v4 as uuid } from "uuid";
import { AiOutlineLike, AiOutlineHome, AiOutlineHistory } from "react-icons/ai";

export const sideNavLinks = [
  {
    _id: uuid(),
    linkTo: "/",
    linkName: "Home",
    Icon: <AiOutlineHome />,
  },
  {
    _id: uuid(),
    linkTo: "/history",
    linkName: "History",
    Icon: <AiOutlineHistory />,
  },
  {
    _id: uuid(),
    linkTo: "/playlist",
    linkName: "Playlist",
    Icon: <MdPlaylistPlay />,
  },
  {
    _id: uuid(),
    linkTo: "/liked",
    linkName: "Liked",
    Icon: <AiOutlineLike />,
  },
  {
    _id: uuid(),
    linkTo: "/watch-later",
    linkName: "Watch Later",
    Icon: <BsStopwatch />,
  },
];
