import { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBook, setBook, setAllBooks, saveBook } from "./bookSlice";
import styles from "./BookResult.module.css";

import { Link } from "react-router-dom";

function BookResult() {
  // store, currentState
  const bookState = useSelector(selectBook);

  const { allBooks } = bookState;

  const { book } = bookState;
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setAllBooks(bookData));
  // }, []);

  function newClick(clickBook) {
    dispatch(setBook(clickBook));
  }

  function saveClick(clickBook) {
    dispatch(saveBook(clickBook));
  }

  return (
    <>
      {allBooks &&
        allBooks.map((book) => {
          return (
            <div className={styles["bookResult"]}>
              <div className={styles["bookResult__header"]}>
                <span className={styles["bookResult__span"]}>
                  <h4>{book.title}</h4>

                  <p>
                    Written by <span>{book.author}</span>
                  </p>
                </span>
                <span className={styles["bookResult__spanButton"]}>
                  <Link to={`/bookDetail/${book.title}`}>
                    <button onClick={() => newClick(book)}>View</button>
                  </Link>
                  <button onClick={() => saveClick(book)}>Save</button>
                </span>
              </div>
              <div className={styles["bookResult__body"]}>
                <img src={book.img} alt="" />
                <p>{book.description}</p>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default BookResult;
