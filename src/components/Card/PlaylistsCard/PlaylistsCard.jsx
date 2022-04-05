import React from "react";
import styles from "./playlists-card.module.css";
import { RiPlayList2Fill } from "react-icons/ri";
import { FaFileVideo } from "react-icons/fa";
import { Link } from "react-router-dom";
import { playlist } from "assets";

export function PlaylistsCard({
  playlist: { _id: playlistId, title, description, videos },
}) {
  return (
    <div className={`card align-items-center ${styles.playlistsCard}`}>
      <div className={`card card-header ${styles.playlistsCardHeader}`}>
        <img
          className={`card-img ${styles.playlistCardImg}`}
          src={videos.length ? videos[0].thumbnail : playlist}
          alt={title}
        />
      </div>
      <div
        className={`card-body card-overlay-text btn btn-primary ${styles.playlistOverlay}`}
      >
        <p className='text-lg text-gray'>
          <RiPlayList2Fill />
          <span className='pd-ht-1 text-lg text-gray'>{title}</span>
        </p>
        <p className='text-lg text-gray'>
          <FaFileVideo />
          <span className='pd-ht-1 text-md'>
            {videos.length
              ? `Total videos ${videos.length}`
              : `Playlist is empty`}
          </span>
        </p>
      </div>
      <div className='card-footer'>
        <Link to={`/playlist/${playlistId}`}>
          <button className='btn btn-secondary'>View Full Playlist</button>
        </Link>
      </div>
    </div>
  );
}
