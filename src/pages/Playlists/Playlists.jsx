import React, { useState } from "react";
import {
  Navbar,
  Sidebar,
  PlaylistsCard,
  EmptyPlaceholder,
  PlaylistModal,
} from "components";
import styles from "./playlists.module.css";
import { usePlaylists } from "context";

export function Playlists() {
  const {
    playlists: { playlists },
  } = usePlaylists();

  const [showModal, setShowModal] = useState(false);

  //Method to toggle modal state
  const btnPlaylistModalHandler = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <section className={styles.navbar}>
        <Navbar />
      </section>
      <section className={styles.sidebar}>
        <Sidebar />
      </section>

      <main className={styles.main}>
        {playlists.length ? (
          ""
        ) : (
          <>
            <div className={styles.topBar}>
              <button
                className={`btn btn-danger btn-danger ${styles.btnCreatePlaylist}`}
                onClick={btnPlaylistModalHandler}
              >
                create a new Playlist
              </button>
            </div>
            <EmptyPlaceholder />
          </>
        )}
        <div className={styles.topBar}>
          <button
            className={`btn btn-danger btn-danger ${styles.btnCreatePlaylist}`}
            onClick={btnPlaylistModalHandler}
          >
            create playlist
          </button>
        </div>
        <section className={styles.playlists}>
          {playlists.map((playlist) => {
            return <PlaylistsCard playlist={playlist} key={playlist._id} />;
          })}
        </section>
        {showModal && (
          <PlaylistModal btnModalHandler={btnPlaylistModalHandler} />
        )}
      </main>
    </div>
  );
}
