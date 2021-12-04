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

  let { allBooks } = currBook;

  const inputBook = (e) => {};

  const searchClick = () => {
    // let tempTitle = currBook.title.split(" ");

    API.findBook(userBook).then((book) => {
      let matchArray = [];
      let resTitles = book.data;

      for (let i = 0; i < resTitles.length; i++) {
        allBooks.map((book) => {
          console.log(book.title);
          console.log(resTitles[i]);
          if (book.title === resTitles[i].title) matchArray.push(book);
        });
      }

      // console.log(title.title);

      // if (title.title === temp.title) {
      //   matchArray.push(temp);
      // }

      console.log(matchArray);
    });

    // dispatch(setAllBooks(matchArray));
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
