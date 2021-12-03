import React, { useState } from "react";
import styles from "./Searchbar.module.css";
import axios from "axios";
import API from "../../uitls/API";

function Searchbar() {
  const [userBook, setUserBook] = useState();

  const inputBook = (e) => {};

  const searchClick = () => {
    // API.findBook(userBook).then((book) => {
    //   console.log(book);
    // });

    API.findBook(userBook).then((book) => {
      console.log(book);
    });
  };

  return (
    <>
      <div className={styles["searchBar"]}>
        <p1>Book Search</p1>
        <p2>Book:</p2>
        <input
          type="text"
          placeholder="Enter book to search"
          className={styles["searchBar__input"]}
          value={userBook}
          onChange={(e) => setUserBook(e.target.value)}
        />
        <button className={styles["searchBar__button"]} onClick={searchClick}>
          Search
        </button>
      </div>
    </>
  );
}

export default Searchbar;
