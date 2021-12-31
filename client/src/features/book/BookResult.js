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

import { Link, useNavigate } from "react-router-dom";

function BookResult() {
  // store, currentState
  const bookState = useSelector(selectBook);
  const navigate = useNavigate();
  const { savedBooks } = useSelector(selectBook);
  const { singleBook } = useSelector(selectBook);
  const dispatch = useDispatch();
  // const {selectedBook}
  const { selectedBooks } = bookState;
  let isSaved;

  console.log(isSaved);

  //array of books returned from redux store
  console.log("saved books below");
  console.log(savedBooks);

  // useEffect(() => {
  //   dispatch(setAllBooks(bookData));
  // }, []);

  function newClick(clickBook) {
    console.log(savedBooks);
    savedBooks.length > 0
      ? savedBooks.map((savedBook) => {
          if (savedBook.title === clickBook.title) {
            console.log(savedBook);
            console.log(savedBooks);
            isSaved = true;
            dispatch(setBook(savedBook));
            console.log("routing to saved book");
            navigate(`/bookDetail/${savedBook.title}`);
          } else {
            isSaved = false;
            dispatch(setBook(clickBook));
            navigate(`/bookDetail/${clickBook.title}`);
          }
          return isSaved;
        })
      : noSaveReroute(clickBook);

    if (isSaved === undefined) {
      console.log("isSaved is undefined");
      dispatch(setBook(clickBook));
      navigate(`/bookDetail/${clickBook.title}`);
    }
  }

  const noSaveReroute = (clickBook) => {
    dispatch(setBook(clickBook));
    navigate(`/bookDetail/${clickBook.title}`);
  };

  // const sendBook = (savedBook) => {
  //   if (isSaved) {
  //     dispatch(setBook(savedBook));
  //   } else {
  //     dispatch(setBook(clickBook));
  //   }
  // };

  function saveClick(clickBook) {
    let bookInSaved = false;

    //determine if book is already saved, if it is, do nothing, if it isn't save to savedBooks
    savedBooks.length > 0
      ? savedBooks.map((booksSaved) => {
          if (booksSaved.title === clickBook.title) {
            bookInSaved = true;
          }
          return bookInSaved;
        })
      : dispatch(setSavedBooks(clickBook));
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
                  {/* <Link to={`/bookDetail/${book.title}`}> */}
                  <button onClick={() => newClick(book)}>View</button>
                  {/* </Link> */}
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
              <h4>{selectedBooks[0]?.title}</h4>

              <p>
                Written by <span>{selectedBooks[0]?.author}</span>
              </p>
            </span>
            <span className={styles["bookResult__spanButton"]}>
              <Link to={`/bookDetail/${selectedBooks[0].title}`}>
                <button onClick={() => newClick(selectedBooks[0])}>View</button>
              </Link>
              <button onClick={() => saveClick(selectedBooks[0])}>Save</button>
            </span>
          </div>
          <div className={styles["bookResult__body"]}>
            <img src={selectedBooks[0].img} alt="" />
            <p>{selectedBooks[0].description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default BookResult;
