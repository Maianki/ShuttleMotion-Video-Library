import React from "react";
import styles from "./playlists-card.module.css";
import { Link } from "react-router-dom";

export function PlaylistsCard({ playlist: { _id: playlistId, title } }) {
  const btnDeleteHandler = () => {};

  return (
    <div className={`card align-items-center ${styles.playlistsCard}`}>
      <div className={`card card-header ${styles.playlistsCardHeader}`}>
        <img
          className={`card-img ${styles.playlistCardImg}`}
          src='https://res.cloudinary.com/dj5aind8q/image/upload/v1648964201/Shuttle%20motion/PV-Sindhu-Match_iino5e.jpg'
          alt=''
        />
      </div>
      <div
        className={`card-body card-overlay-text btn btn-primary ${styles.playlistOverlay}`}
      >
        Name of playlist videos - 32
      </div>
      <div className='card-footer'>
        <Link to={`/playlist/${playlistId}`}>
          <button className='btn btn-secondary'>View Full Playlist</button>
        </Link>
      </div>
    </div>
  );
}
