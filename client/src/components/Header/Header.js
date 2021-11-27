import React from "react";
import styles from "./Header.module.css";

function header() {
  return (
    <>
      <div className={styles["search__header"]}>
        <p className={styles["search__headerMain"]}>Google Books</p>
        <span className={styles["search__headerSub"]}>
          <p>Search</p> | <p>Saved</p>
        </span>
      </div>
    </>
  );
}

export default header;
