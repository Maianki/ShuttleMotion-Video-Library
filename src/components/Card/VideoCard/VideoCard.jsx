import React from "react";
import styles from "./videocard.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { test } from "assets";

export function VideoCard() {
  return (
    <>
      <div className={`card ${styles.cardVideo}`}>
        <img className='responsive-img' src={test} loading='lazy' alt='' />

        <div className={`card-body flex-row ${styles.videoCardBody}`}>
          <img
            className='avatar avatar-round avatar-xs'
            src={test}
            alt='test avatar'
          />
          <p className='text-bold-500 pd-ht-1'>
            Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
          </p>
          <span className={styles.videoMenu}>
            <BsThreeDotsVertical />
          </span>
        </div>
        <div className='flex-row card-footer'>
          <p className='text-xs text-highlight pd-ht-1'>World Cup</p>
          <p className='text-xs text-highlight pd-ht-1'>10k views</p>
        </div>
      </div>
    </>
  );
}
