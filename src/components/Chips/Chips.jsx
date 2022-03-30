import React from "react";
import styles from "./chips.module.css";

export function Chips({ categoryName, activeCategory, clickHandler }) {
  return (
    <>
      <button
        className={
          activeCategory === categoryName
            ? `${styles.chip} ${styles.chipActive}`
            : `${styles.chip}`
        }
        onClick={() => clickHandler(categoryName)}
      >
        {categoryName}
      </button>
    </>
  );
}
