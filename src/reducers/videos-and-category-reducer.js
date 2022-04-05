export const videosAndCategoryInitialState = {
  videos: [],
  categories: [],
  filterByCategory: "All",
};

export const videosAndCategoryReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INITIALIZE_VIDEOS":
      return { ...state, videos: payload };
    case "INITIALIZE_CATEGORIES":
      return { ...state, categories: payload };
    case "FILTER_VIDEOS_BY_CATEGORY":
      return { ...state, filterByCategory: payload };

    default:
      throw Error("Unknown action.");
  }
};
