import React from "react";
import styles from "./Search.module.css";

function Search() {
  return (
    <div>
      <div className={styles["search__header"]}>
        <p className={styles["search__headerMain"]}>Google Books</p>
        <span className={styles["search__headerSub"]}>
          <p>Search</p> | <p>Saved</p>
        </span>
      </div>
    </div>
  );
}

export default Search;
