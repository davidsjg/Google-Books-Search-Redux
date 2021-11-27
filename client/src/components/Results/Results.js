import React from "react";
import styles from "./Results.module.css";

function Results() {
  return (
    <>
      <div className={styles["results"]}>
        <p1>Book Search</p1>
        <p2>Book:</p2>

        <button className={styles["searchBar__button"]}>Search</button>
      </div>
    </>
  );
}

export default Results;
