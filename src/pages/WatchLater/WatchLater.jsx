import React from "react";
import { Navbar, Sidebar, VideoCard, EmptyPlaceholder } from "components";
import styles from "./watchlater.module.css";
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
        {watchLaterVideos.length ? "" : <EmptyPlaceholder />}
        <div className={styles.topBar}>
          {watchLaterVideos.length ? (
            <h3 className='text-center text-highlight'>
              {watchLaterVideos.length} video in watch later.
            </h3>
          ) : null}
        </div>
        <section className={styles.watchlaterVideos}>
          {watchLaterVideos.map((video) => {
            return <VideoCard video={video} key={video._id} />;
          })}
        </section>
      </main>
    </div>
  );
}
