import { useVideosAndCategories } from "context/videos-and-category-context";

/**
 * custom hook to filterData based on filter appplied by user
 *
 * @returns filtered data based on filter applied by user
 *
 */

export function useFilteredData() {
  const {
    videosAndCategory: { videos, filterByCategory },
  } = useVideosAndCategories();

  console.log(filterByCategory);
  const filteredData = JSON.parse(JSON.stringify(videos));
  const getFilteredByCategory = (videos, filterByCategory) => {
    if (filterByCategory === "All") {
      return videos;
    } else {
      return videos.filter(({ category }) => category === filterByCategory);
    }
  };

  const filteredDataByCategory = getFilteredByCategory(
    filteredData,
    filterByCategory
  );

  return { filteredData: filteredDataByCategory };
}
