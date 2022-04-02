import React from "react";
import { Navbar, Sidebar, VideoCard, VideoCardHorizontal } from "components";
import styles from "./watchlater.module.css";
import { Link } from "react-router-dom";
import { useVideosOperations } from "context";

export function WatchLater() {
  const {
    videosOperations: { watchLaterVideos },
  } = useVideosOperations();

  return (
    <div className={styles.container}>
      <section className={styles.navbar}>
        <Navbar />
      </section>
      <section className={styles.sidebar}>
        <Sidebar />
      </section>

      <main className={styles.main}>
        {watchLaterVideos.map((video) => {
          return (
            <Link key={video._id} to={`/watch/${video.videoID}`}>
              <VideoCard video={video} />
            </Link>
          );
        })}
      </main>
    </div>
  );
}
