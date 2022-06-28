import React from "react";
import { getEmptyPlaceholderData } from "utils";
import styles from "./emptyplaceholder.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { emptyBox } from "assets";

export function EmptyPlaceholder() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const btnClickHandler = () => {
    navigate("/");
  };
  const { heading, description } = getEmptyPlaceholderData(
    pathname.slice(1)
  ) ?? {
    _id: uuid(),
    heading: "Playlist is empty",
    description: "Browse videos to add them to your playlist",
  };
  return (
    <section className={styles.emptySection}>
      <img src={emptyBox} className='round-img round-lg' alt='empty box' />
      <h2 className={styles.emptySectionHeading}>{heading}</h2>
      <p className={`text-gray md-btm-2 ${styles.description}`}>
        {description}
      </p>
      <button className='btn btn-primary' onClick={btnClickHandler}>
        Browse Videos
      </button>
    </section>
  );
}
