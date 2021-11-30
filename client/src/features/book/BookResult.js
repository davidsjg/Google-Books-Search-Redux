import { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBook, setBook, setAllBooks } from "./bookSlice";
import styles from "./BookResult.module.css";
import BookContext from "../../uitls/BookContext";
import { Link } from "react-router-dom";

function BookResult() {
  //store, current state
  const bookState = useSelector(selectBook);
  const { allBooks } = bookState;
  const { book } = bookState;
  const dispatch = useDispatch();
  const { bookData } = useContext(BookContext);

  // console.log(book);

  useEffect(() => {
    dispatch(setAllBooks(bookData));
  }, []);

  // const buttonClick = (clickBook) => {
  //   console.log(clickBook);
  // };

  function newClick(clickBook) {
    // console.log(clickBook);
    dispatch(setBook(clickBook));
    localStorage.setItem("book", JSON.stringify(clickBook));
  }

  const buttonClick2 = () => {
    console.log(book);
  };

  return (
    <>
      {allBooks.map((book) => {
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
                <button onClick={() => newClick(book)}>Save</button>
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
