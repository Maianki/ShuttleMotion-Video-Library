import React, { useState } from "react";
import styles from "./videolisting.module.css";
import { useVideosAndCategories } from "context/videos-and-category-context";
import { Navbar, Sidebar, VideoCard, Chips } from "components";
import { useFilteredData } from "hooks/useFilteredData";

export function VideoListing() {
  const {
    videosAndCategory: { categories },
    videosAndCategoryDispatcher,
  } = useVideosAndCategories();

  const { filteredData } = useFilteredData();
  const [activeCategory, setActiveCategory] = useState("All");
  const activeCategoryHandler = (categoryName) => {
    setActiveCategory(categoryName);

    videosAndCategoryDispatcher({
      type: "FILTER_VIDEOS_BY_CATEGORY",
      payload: categoryName,
    });
  };

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
          {categories.map(({ _id, categoryName }) => (
            <Chips
              key={_id}
              categoryName={categoryName}
              clickHandler={activeCategoryHandler}
              activeCategory={activeCategory}
            />
          ))}
        </div>
        <section className={styles.videosThumbnail}>
          {filteredData.map((video) => {
            return <VideoCard key={video._id} video={video} />;
          })}
        </section>
      </section>
    </div>
  );
}
