import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./BookDetail.module.css";
import { selectBook, setBook } from "../../features/book/bookSlice";
import BookContext from "../../uitls/BookContext";
import { useParams } from "react-router-dom";

function BookDetail() {
  const book = useSelector(selectBook);
  const dispatch = useDispatch();
  const { bookData } = useContext(BookContext);

  const test = useParams();

  console.log(test);

  useEffect(() => {
    dispatch(setBook(bookData));
  }, []);

  const buttonClick = () => {
    console.log(book);
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
