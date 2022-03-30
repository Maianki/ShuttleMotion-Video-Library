/***
 * This function returns trimmed title of video
 * @params - a string - title of video
 * @return - a string which is trimmed value of title
 *
 */

export const getTrimVideoTitle = (title) => {
  return title.length < 50 ? title : title.substr(0, 45) + "...";
};
