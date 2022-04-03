import { emptyPlaceholderData } from "data";
/***
 * This function returns similar category videos
 * @params - a string - which is path of the current page
 * @return - an object that contains data to display on empty placeholder
 *
 */

export const getEmptyPlaceholderData = (pathname) => {
  return emptyPlaceholderData.find(({ route }) => route === pathname);
};
