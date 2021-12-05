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
    let matchArray = [];

    API.findBook(userBook).then((book) => {
      let resTitles = book.data;
      let tempBookTitle;
      let newArr = [];

      console.log(book.data);

      book.data.map((book) => {
        newArr.push(book.title);
        // console.log(newArr);
      });
      console.log(allBooks);
      // newArr.map((bookTitle) => {
      //   // console.log(bookTitle);
      //   const result = allBooks.find((book) => {
      //     book.title === bookTitle;
      //   });
      //   return result;
      // });

      // book.data.map((book) => {
      //   let tempTitle = book.title;

      //   allBooks.find((findBook) => {
      //     let { title } = findBook;
      //     console.log(title);
      //     console.log(tempTitle);

      //     if (title === tempTitle) matchArray.push(book);
      //   });
      // });

      // allBooks.map((book) => {
      //   console.log(book.title);
      //   tempTitles.push(book.title);
      // });
      // console.log(tempTitles);

      // allBooks.map((findBook, index) => {
      //   tempBookTitle = resTitles[index];

      //   resTitles.find((book) => {});
      // });

      // res;
      // resTitles.map((title) => {
      //   let tempTitle = title.title;
      //   let tempBookTitle = findBook.title;
      //   console.log(tempBookTitle);
      //   console.log(tempTitle);
      //   // if (findBook.title === temp) matchArray.push(findBook);
      //   // return matchArray;
      // });

      // for (let i = 0; i < resTitles.length; i++) {
      //   let tempTitle = resTitles[i];
      //   allBooks.map((book) => {
      //     console.log(book.title);
      //     console.log(resTitles[i].title);
      //     {
      //       if (book.title === resTitles[i].title) matchArray.push(book);
      //     }
      //   });
      // }

      // console.log(title.title);

      // if (title.title === temp.title) {
      //   matchArray.push(temp);
      // }

      console.log(matchArray);
    });

    dispatch(setAllBooks(matchArray));
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
