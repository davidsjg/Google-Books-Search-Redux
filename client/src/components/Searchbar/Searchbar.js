import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from "./Searchbar.module.css";
import axios from "axios";
import API from "../../uitls/API";
import {
  selectBook,
  setAllBooks,
  setBook,
  setSelectedBooks,
} from "../../features/book/bookSlice";
import { useNavigate } from "react-router-dom";

function Searchbar() {
  const [userBook, setUserBook] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currBook = useSelector(selectBook);

  let { allBooks } = currBook;

  let { savedBooks } = currBook;

  console.log("saved books below");
  console.log(savedBooks);

  const searchClick = () => {
    // let tempTitle = currBook.title.split(" ");

    let filteredStrings = allBooks.filter((book) =>
      book.title.toLowerCase().includes(userBook.toLowerCase())
    );

    dispatch(setSelectedBooks(filteredStrings));
    navigate(`/search/bookResult`);
  };

  const handleClick = () => {
    console.log(currBook);
  };

  return (
    <>
      <div className={styles["searchBar"]}>
        <p1>Book Search</p1>
        <p2>Enter Harry Potter Book Title or Partial Book Title:</p2>
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
        {/* <button onClick={handleClick}>sup</button> */}
      </div>
    </>
  );
}

export default Searchbar;

// book.data.map((book) => {
//   newArr.push(book.title);
// console.log(newArr);
// });

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

// console.log(matchArray);
