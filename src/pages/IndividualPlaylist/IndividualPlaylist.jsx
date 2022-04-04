import React from "react";
import styles from "./individual-playlist.module.css";
import { Navbar, Sidebar, VideoCard, EmptyPlaceholder } from "components";
import { useParams } from "react-router-dom";
import { usePlaylists } from "context";

export function IndividualPlaylist() {
  const { playlistID } = useParams();
  const {
    playlists: { playlists },
  } = usePlaylists();

  const playlist = playlists.find(({ _id }) => _id === playlistID);
  console.log(playlist);
  const btnDeletePlaylistHandler = () => {};
  return (
    <div className={styles.container}>
      <section className={styles.navbar}>
        <Navbar />
      </section>
      <section className={styles.sidebar}>
        <Sidebar />
      </section>

      <main className={styles.main}>
        {true ? "" : <EmptyPlaceholder />}
        <div className={styles.topBar}>
          {true > 0 ? (
            <button
              className={`btn btn-danger btn-secondary ${styles.btnDeletePlaylist}`}
              onClick={btnDeletePlaylistHandler}
            >
              Delete Playlist
            </button>
          ) : null}
        </div>
        <section className={styles.historyVideos}>
          {/* {historyVideos.map((video) => {
            return <VideoCard video={video} key={video._id} />;
          })} */}
        </section>
      </main>
    </div>
  );
}
