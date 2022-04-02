import React from "react";
import { Navbar, Sidebar, VideoCard, VideoCardHorizontal } from "components";
import styles from "./liked.module.css";
import { Link } from "react-router-dom";
import { useVideosOperations } from "context";

export function Liked() {
  const {
    videosOperations: { likedVideos },
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
        {likedVideos.map((video) => {
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
