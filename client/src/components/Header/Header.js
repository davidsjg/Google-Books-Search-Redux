import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className={styles["search__header"]}>
        <a href={"/"}>
          <p className={styles["search__headerMain"]}>Google Books</p>
        </a>

        <span className={styles["search__headerSub"]}>
          <p>Search</p> |
          <a href={"/saved"}>
            <p className={styles["savedButton"]}>Saved</p>
          </a>
        </span>
      </div>
    </>
  );
}

export default Header;
