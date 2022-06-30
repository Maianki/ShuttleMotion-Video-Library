import React, { useEffect, useState } from "react";
import styles from "./videolisting.module.css";
import { ImSearch } from "react-icons/im";
import { useVideosAndCategories } from "context/videos-and-category-context";
import { Navbar, Sidebar, VideoCard, Chips } from "components";
import { useFilteredData } from "hooks/useFilteredData";
import { useDebounce } from "hooks/useDebounce";

export function VideoListing() {
  const {
    videosAndCategory: { categories },
    videosAndCategoryDispatcher,
  } = useVideosAndCategories();

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const { filteredData } = useFilteredData(activeCategory);
  const debouncedValue = useDebounce(searchValue, 1000);

  const activeCategoryHandler = (categoryName) => {
    setActiveCategory(categoryName);

    videosAndCategoryDispatcher({
      type: "FILTER_VIDEOS_BY_CATEGORY",
      payload: categoryName,
    });
  };

  useEffect(() => {
    videosAndCategoryDispatcher({
      type: "FILTER_BY_SEARCH",
      payload: debouncedValue,
    });
  }, [debouncedValue]);

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <section className={styles.navbar}>
        <Navbar />
      </section>
      <section className={styles.sidebarNav}>
        <Sidebar />
      </section>
      <main className={styles.main}>
        <div className={styles.categoryChips}>
          {categories &&
            categories.map(({ _id, categoryName }) => (
              <Chips
                key={_id}
                categoryName={categoryName}
                clickHandler={activeCategoryHandler}
                activeCategory={activeCategory}
              />
            ))}
          <form className={`${styles.searchBar} form-label-inline`}>
            <input
              className={`form-search ${styles.videoSearchBar}`}
              type='search'
              placeholder='Search'
              aria-label='Search'
              value={searchValue}
              onChange={searchHandler}
            />
            <span className={styles.searchIcon}>
              <ImSearch />
            </span>
          </form>
        </div>
        <section className={styles.videosThumbnail}>
          {filteredData &&
            filteredData.map((video) => {
              return <VideoCard key={video._id} video={video} />;
            })}
        </section>
      </main>
    </div>
  );
}
