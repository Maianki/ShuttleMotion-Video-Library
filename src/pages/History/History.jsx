import React from "react";
import { Navbar, Sidebar, VideoCard } from "components";
import styles from "./history.module.css";
import { useVideosOperations } from "context";

export function History() {
  const {
    videosOperations: { historyVideos },
    manageDeleteHistoryAll,
  } = useVideosOperations();
  const btnDeleteHandler = () => {
    manageDeleteHistoryAll();
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
          {historyVideos.length > 0 ? (
            <button
              className='btn btn-danger btn-secondary'
              onClick={btnDeleteHandler}
            >
              clear all history
            </button>
          ) : null}
        </div>
        <section className={styles.historyVideos}>
          {historyVideos.map((video) => {
            return <VideoCard video={video} key={video._id} />;
          })}
        </section>
      </main>
    </div>
  );
}
