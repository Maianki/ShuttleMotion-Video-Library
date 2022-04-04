import React, { useState } from "react";
import styles from "./videocard.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CharmTick, IcSharpPlus } from "assets";
import { MdDelete } from "react-icons/md";
import { useLocation, Link } from "react-router-dom";
import { getTrimVideoTitle } from "utils";
import { useVideosOperations } from "context";
import { PlaylistModal } from "components";

export function VideoCard({
  video,
  video: {
    _id: id,
    title,
    thumbnail,
    videoID,
    views,
    creator: { profile: creatorProfile, name: creatorName },
  },
}) {
  const { manageDeleteHistory } = useVideosOperations();
  const { pathname } = useLocation();
  const trimmedTitle = getTrimVideoTitle(title);

  const {
    manageWatchLater,
    videosOperations: { watchLaterVideos },
  } = useVideosOperations();

  const btnDeleteHandler = () => {
    manageDeleteHistory(id);
  };

  const btnWatchLaterHandler = () => {
    manageWatchLater(video);
  };

  const [showOption, setShowOption] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const btnPlaylistModalHandler = () => {
    setShowModal((prev) => !prev);
  };

  const btnVideoOptionHandler = () => {
    setShowOption((prev) => !prev);
  };
  return (
    <>
      <div className={`card ${styles.cardVideo}`}>
        <Link to={`/watch/${videoID}`}>
          <img
            className='responsive-img'
            src={thumbnail}
            loading='lazy'
            alt=''
          />

          <div className={`card-body flex-row ${styles.videoCardBody}`}>
            <img
              className='avatar avatar-round avatar-xs'
              src={creatorProfile}
              alt={creatorName}
            />
            <p className='text-bold-500 pd-ht-1'>{trimmedTitle}</p>
          </div>
        </Link>
        <div className={`flex-row card-footer ${styles.videoCardFooter}`}>
          <h6>{creatorName}</h6>
          <p
            className={`text-xs text-highlight pd-ht-1 ${styles.videoViewsCount}`}
          >
            {views} views
          </p>

          <span
            className={`${styles.videoMenu} ${styles.videoCardMenu}`}
            onClick={btnVideoOptionHandler}
            role='button'
          >
            <BsThreeDotsVertical />
          </span>

          {!!showOption && (
            <ol className={`card ${styles.videoOptions} list-unstyled`}>
              <li
                className={`${styles.videoOptionsItem} flex-row`}
                role='button'
                onClick={btnWatchLaterHandler}
              >
                {watchLaterVideos.find(({ _id }) => _id === id) ? (
                  <CharmTick className='text-md' />
                ) : (
                  <IcSharpPlus className='text-md' />
                )}
                Add to watch Later
              </li>
              <li
                className={`${styles.videoOptionsItem} flex-row`}
                role='button'
                onClick={btnPlaylistModalHandler}
              >
                <IcSharpPlus className='text-md' />
                Save to playlist
              </li>
            </ol>
          )}

          {!!(pathname === "/history") && (
            <span
              className={styles.deleteIcon}
              role='button'
              onClick={btnDeleteHandler}
            >
              <MdDelete />
            </span>
          )}
        </div>
      </div>
      {showModal && <PlaylistModal btnModalHandler={btnPlaylistModalHandler} />}
    </>
  );
}
