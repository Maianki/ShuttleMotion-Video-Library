import React from "react";
import { Navbar, Sidebar, PlaylistsCard } from "components";
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
        <section className={styles.playlists}>
          <PlaylistsCard />
        </section>
      </main>
    </div>
  );
}
