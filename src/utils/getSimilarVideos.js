/***
 * This function returns similar category videos
 * @params - a string - category of the video
 * @params - an array - array of all videos
 * @params - a string - id of the current video on user's view
 * @return - an array of video with similar category
 *
 */

export const getSimilarVideos = (category, videos, id) => {
  return videos.filter(
    ({ category: videoCategory, videoID }) =>
      category === videoCategory && videoID !== id
  );
};
