import React from "react";
import { Navbar, Sidebar, PlaylistsCard, EmptyPlaceholder } from "components";
import styles from "./playlists.module.css";

export function Playlists() {
  return (
    <div className={styles.container}>
      <section className={styles.navbar}>
        <Navbar />
      </section>
      <section className={styles.sidebar}>
        <Sidebar />
      </section>

      <main className={styles.main}>
        <div className={styles.topBar}></div>
        {<EmptyPlaceholder />}
        <section className={styles.playlists}>
          {/* <PlaylistsCard /> */}
        </section>
      </main>
    </div>
  );
}
