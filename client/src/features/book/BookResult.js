import { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBook, setBook } from "./bookSlice";
import styles from "./BookResult.module.css";
import BookContext from "../../uitls/BookContext";

function BookResult() {
  const book = useSelector(selectBook);
  const { allBooks } = book;
  const dispatch = useDispatch();
  const { bookData } = useContext(BookContext);

  // useEffect(() => {

  // }, []);

  const buttonClick = () => {
    dispatch(setBook(bookData));
  };

  const buttonClick2 = () => {
    // console.log(book);
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
                <button onClick={buttonClick}>View</button>
                <button onClick={buttonClick2}>Save</button>
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
