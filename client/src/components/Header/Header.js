import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className={styles["search__header"]}>
        <Link to={"/"}>
          <p className={styles["search__headerMain"]}>Google Books</p>
        </Link>

        <span className={styles["search__headerSub"]}>
          <Link to={"/search"}>
            <p className={styles["searchButton"]}>Search</p>
          </Link>
          |
          <Link to={"/saved"}>
            <p className={styles["savedButton"]}>View Saved</p>
          </Link>
        </span>

        <Link to={"/login"}>
          <p className={styles["header_login"]}>Login</p>
        </Link>
      </div>
    </>
  );
}

export default Header;
