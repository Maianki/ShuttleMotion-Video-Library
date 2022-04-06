import { useVideosAndCategories } from "context";

/**
 * custom hook to filterData based on filter appplied by user
 *
 * @returns filtered data based on filter applied by user
 *
 */

export function useFilteredData(activeCategory) {
  const {
    videosAndCategory: { videos },
  } = useVideosAndCategories();

  const filteredData = JSON.parse(JSON.stringify(videos));
  const getFilteredByCategory = (videos, filterByCategory) =>
    filterByCategory === "All"
      ? videos
      : videos.filter(({ category }) => category === filterByCategory);

  const filteredDataByCategory = getFilteredByCategory(
    filteredData,
    activeCategory
  );

  return { filteredData: filteredDataByCategory };
}
