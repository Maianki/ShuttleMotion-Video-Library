import React from "react";
import { Navbar, Sidebar, VideoCard, EmptyPlaceholder } from "components";
import styles from "./liked.module.css";
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
        {likedVideos.length ? "" : <EmptyPlaceholder />}
        <div className={styles.topBar}>
          {likedVideos.length ? (
            <h3 className='text-center text-highlight'>
              {likedVideos.length} liked videos
            </h3>
          ) : null}
        </div>
        <section className={styles.likedVideos}>
          {likedVideos.map((video) => {
            return <VideoCard video={video} key={video._id} />;
          })}
        </section>
      </main>
    </div>
  );
}
