import React from "react";
import styles from "./videocard.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useLocation, Link } from "react-router-dom";
import { getTrimVideoTitle } from "utils";
import { useVideosOperations } from "context";

export function VideoCard({
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
  const btnDeleteHandler = () => {
    manageDeleteHistory(id);
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
            <span className={styles.videoMenu}>
              <BsThreeDotsVertical />
            </span>
          </div>
        </Link>
        <div className={`flex-row card-footer ${styles.videoCardFooter}`}>
          <h6>{creatorName}</h6>
          <p className='text-xs text-highlight pd-ht-1'>{views} views</p>

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
    </>
  );
}
