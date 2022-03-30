import React from "react";
import styles from "./videocard.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getTrimVideoTitle } from "utils";

export function VideoCard({
  video: {
    title,
    thumbnail,
    views,
    creator: { profile: creatorProfile, name: creatorName },
  },
}) {
  const trimmedTitle = getTrimVideoTitle(title);
  return (
    <>
      <div className={`card ${styles.cardVideo}`}>
        <img className='responsive-img' src={thumbnail} loading='lazy' alt='' />

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
        <div className={`flex-row card-footer ${styles.videoCardFooter}`}>
          <h6>{creatorName}</h6>
          <p className='text-xs text-highlight pd-ht-1'>{views} views</p>
        </div>
      </div>
    </>
  );
}
