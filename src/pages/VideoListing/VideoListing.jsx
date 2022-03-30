import React from "react";
import styles from "./videolisting.module.css";
import { videos } from "backend/db/videos";
import { Navbar, Sidebar, VideoCard, Chips } from "components";

export function VideoListing() {
  return (
    <div className={styles.container}>
      <section className={styles.navbar}>
        <Navbar />
      </section>
      <section className={styles.sidebarNav}>
        <Sidebar />
      </section>
      <section className={styles.main}>
        <div className={styles.categoryChips}>
          {[
            "Matches",
            "Badminton Tutorials",
            "Badminton Trick Shots",
            "Players Interview",
          ].map((categoryName) => (
            <Chips key={categoryName} categoryName={categoryName} />
          ))}
        </div>
        <section className={styles.videosThumbnail}>
          {videos.map((video) => {
            return <VideoCard key={video._id} video={video} />;
          })}
        </section>
      </section>
    </div>
  );
}
