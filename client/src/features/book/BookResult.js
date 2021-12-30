import { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectBook,
  setBook,
  setAllBooks,
  saveBook,
  setSavedBooks,
} from "./bookSlice";
import styles from "./BookResult.module.css";

import { Link } from "react-router-dom";

function BookResult() {
  // store, currentState
  const bookState = useSelector(selectBook);
  const dispatch = useDispatch();
  // const {selectedBook}
  const { selectedBooks } = bookState;

  //array of books returned from redux store
  console.log(selectedBooks);

  // useEffect(() => {
  //   dispatch(setAllBooks(bookData));
  // }, []);

  function newClick(clickBook) {
    dispatch(setBook(clickBook));
  }

  function saveClick(clickBook) {
    dispatch(setSavedBooks(clickBook));
  }

  return (
    <>
      {selectedBooks.length > 0 ? (
        selectedBooks.map((book) => {
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
        })
      ) : (
        <div className={styles["bookResult"]}>
          <div className={styles["bookResult__header"]}>
            <span className={styles["bookResult__span"]}>
              <h4>{selectedBooks.title}</h4>

              <p>
                Written by <span>{selectedBooks.author}</span>
              </p>
            </span>
            <span className={styles["bookResult__spanButton"]}>
              <Link to={`/bookDetail/${selectedBooks.title}`}>
                <button onClick={() => newClick(selectedBooks)}>View</button>
              </Link>
              <button onClick={() => saveClick(selectedBooks)}>Save</button>
            </span>
          </div>
          <div className={styles["bookResult__body"]}>
            <img src={selectedBooks.img} alt="" />
            <p>{selectedBooks.description}</p>
          </div>
        </div>
      )}

      {/* {selectedBooks.map((book) => {
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
                <Link to={`search/bookResult/bookDetail/${book.title}`}>
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
      })} */}

      {/* {bookState &&
        bookState.map((book) => {
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
        })} */}
    </>
  );
}

export default BookResult;
