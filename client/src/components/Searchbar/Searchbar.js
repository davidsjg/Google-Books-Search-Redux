import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from "./Searchbar.module.css";
import axios from "axios";
import API from "../../uitls/API";
import { selectBook, setAllBooks } from "../../features/book/bookSlice";

function Searchbar() {
  const [userBook, setUserBook] = useState();
  const dispatch = useDispatch();

  const currBook = useSelector(selectBook);

  const inputBook = (e) => {};

  const searchClick = () => {
    // let tempTitle = currBook.title.split(" ");
    console.log(currBook.allBooks);

    let tempArray = currBook.allBooks.map((book) => {
      let bookTitleArray = book.title.split(" ");
      console.log(bookTitleArray);
    });

    API.findBook(userBook).then((book) => {
      console.log(book);
      dispatch(setAllBooks(book.data));
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
