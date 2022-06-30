import { useVideosAndCategories } from "context";

/**
 * custom hook to filterData based on filter appplied by user
 *
 * @returns filtered data based on filter applied by user
 *
 */

export function useFilteredData(activeCategory) {
  const {
    videosAndCategory: { videos, filterDataBySearch },
  } = useVideosAndCategories();

  const filteredData = JSON.parse(JSON.stringify(videos));

  const getFilteredByCategory = (videos, filterByCategory) =>
    filterByCategory === "All"
      ? videos
      : videos.filter(({ category }) => category === filterByCategory);

  const getFilteredBySearch = (filteredVideos, searchedValue) => {
    if (searchedValue === "") {
      return filteredVideos;
    } else {
      let re = new RegExp(`${searchedValue}`, "i");
      return filteredVideos.filter(({ title }) => re.test(title));
    }
  };

  const filteredDataByCategory = getFilteredByCategory(
    filteredData,
    activeCategory
  );

  const finalFilteredData = getFilteredBySearch(
    filteredDataByCategory,
    filterDataBySearch
  );

  return { filteredData: finalFilteredData };
}
