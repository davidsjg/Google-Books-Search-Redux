import React from "react";
import styles from "./Searchbar.module.css";

function Searchbar() {
  return (
    <>
      <div className={styles["searchBar"]}>
        <p1>Book Search</p1>
        <p2>Book:</p2>
        <input
          type="text"
          placeholder="Enter book to search"
          className={styles["searchBar__input"]}
        />
        <button className={styles["searchBar__button"]}>Search</button>
      </div>
    </>
  );
}

export default Searchbar;
