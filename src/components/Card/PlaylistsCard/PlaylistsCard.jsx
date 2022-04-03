import React from "react";
import styles from "./playlists-card.module.css";

export function PlaylistsCard() {
  return (
    <div class='card align-items-center'>
      <div class={`card card-header ${styles.playlistsCard}`}>
        <img
          class='card-img'
          src='./components/assets/smash badminton.jpg'
          alt=''
        />
      </div>
      <div class='card-body card-overlay-text btn btn-primary'>New Arrival</div>
      <div class='card-footer'>
        <button class='btn btn-primary'>Shop Now</button>
      </div>
    </div>
  );
}
