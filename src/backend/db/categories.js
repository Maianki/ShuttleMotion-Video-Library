import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
  },
  {
    _id: uuid(),
    categoryName: "Match Highlights",
  },
  {
    _id: uuid(),
    categoryName: "Badminton Tutorials",
  },
  {
    _id: uuid(),
    categoryName: "Badminton Trick Shots",
  },
  {
    _id: uuid(),
    categoryName: "Players Interview",
  },
];
