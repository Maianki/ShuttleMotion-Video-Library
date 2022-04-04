import React from "react";
import { Navbar, Sidebar, PlaylistsCard, EmptyPlaceholder } from "components";
import styles from "./playlists.module.css";
import { usePlaylists } from "context";

export function Playlists() {
  const {
    playlists: { playlists },
  } = usePlaylists();

  const btnDeleteHandler = () => {};

  return (
    <div className={styles.container}>
      <section className={styles.navbar}>
        <Navbar />
      </section>
      <section className={styles.sidebar}>
        <Sidebar />
      </section>

      <main className={styles.main}>
        {playlists.length ? "" : <EmptyPlaceholder />}
        <div className={styles.topBar}></div>
        <section className={styles.playlists}>
          {playlists.map((playlist) => {
            return <PlaylistsCard playlist={playlist} key={playlist._id} />;
          })}
        </section>
      </main>
    </div>
  );
}
