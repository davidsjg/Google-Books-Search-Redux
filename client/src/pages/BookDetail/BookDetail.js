import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./BookDetail.module.css";
import { selectBook, setBook } from "../../features/book/bookSlice";
import BookContext from "../../uitls/BookContext";
import { useParams } from "react-router-dom";

function BookDetail() {
  const bookStore = useSelector(selectBook);
  const dispatch = useDispatch();
  const { bookData } = useContext(BookContext);

  let bookSelect;

  const { book } = useParams();

  useEffect(() => {
    dispatch(setBook(bookData));
    console.log(book);
    bookSelect = bookData.find(({ title }) => {
      console.log(title);
      return title == book;
    });
  }, []);

  const buttonClick = () => {
    console.log(bookSelect);
  };

  return (
    <>
      <div className={styles["bookDetail"]}>
        <p>sup brah</p>
        <button onClick={buttonClick}>CLICK ME BRAH</button>
      </div>
    </>
  );
}

export default BookDetail;
