import React from "react";
import { getEmptyPlaceholderData } from "utils";
import styles from "./emptyplaceholder.module.css";
import { useLocation, useNavigate } from "react-router-dom";

export function EmptyPlaceholder() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const btnClickHandler = () => {
    navigate("/");
  };
  const {
    image: emptyBox,
    heading,
    description,
  } = getEmptyPlaceholderData(pathname.slice(1));
  return (
    <section className={styles.emptySection}>
      <img src={emptyBox} className='round-img round-lg' alt='empty box' />
      <h2 className={styles.emptySectionHeading}>{heading}</h2>
      <p className='text-gray md-btm-2'>{description}</p>
      <button className='btn btn-primary' onClick={btnClickHandler}>
        Browse Videos
      </button>
    </section>
  );
}
