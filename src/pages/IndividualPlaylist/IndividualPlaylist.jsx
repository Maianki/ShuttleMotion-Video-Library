import React from "react";
import styles from "./individual-playlist.module.css";
import { Navbar, Sidebar, VideoCard, EmptyPlaceholder } from "components";
import { useParams, useNavigate } from "react-router-dom";
import { usePlaylists } from "context";

export function IndividualPlaylist() {
  const navigate = useNavigate();
  const { playlistID } = useParams();
  const {
    playlists: { playlists },
    deletePlaylist,
  } = usePlaylists();

  const playlist = playlists.find(({ _id }) => _id === playlistID);

  const { videos: playlistVideos } = playlist;

  const btnDeletePlaylistHandler = () => {
    deletePlaylist(playlistID);
    navigate("/playlist");
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
        <div className={styles.topBar}>
          <button
            className={`btn btn-danger ${styles.btnDeletePlaylist}`}
            onClick={btnDeletePlaylistHandler}
          >
            Delete Playlist
          </button>
        </div>
        {playlistVideos.length ? "" : <EmptyPlaceholder />}
        <section className={styles.individualVideos}>
          {playlistVideos.map((video) => {
            return (
              <VideoCard video={video} key={video._id} playlist={playlist} />
            );
          })}
        </section>
      </main>
    </div>
  );
}
