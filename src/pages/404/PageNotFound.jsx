import React from "react";
import styles from "./pagenotfound.module.css";
import { notFound } from "assets";
import { useDocumentTitle } from "hooks";
import { useNavigate } from "react-router-dom";

export function PageNotFound() {
  useDocumentTitle("Page not found");
  const navigate = useNavigate();
  const btnClickHandler = () => {
    navigate("/");
  };

  return (
    <div className={styles.show404}>
      <h1 className={styles.heading}>You took a wrong turn</h1>
      <img
        className={`responsive-img ${styles.showNotFound}`}
        src={notFound}
        alt='page not found'
      ></img>
      <button className='btn btn-secondary' onClick={btnClickHandler}>
        Back to home
      </button>
    </div>
  );
}
