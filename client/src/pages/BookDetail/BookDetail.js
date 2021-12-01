import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./BookDetail.module.css";
import {
  selectBook,
  setBook,
  setRead,
  setUnread,
} from "../../features/book/bookSlice";
import BookContext from "../../uitls/BookContext";
import { useParams } from "react-router-dom";

function BookDetail() {
  const { selectedBook } = useSelector(selectBook);
  const dispatch = useDispatch();
  let book2;

  const params = useParams();
  console.log(params);
  // const { bookData } = useContext(BookContext);

  useEffect(() => {
    book2 = JSON.parse(localStorage.getItem("book"));
    console.log(book2);
    dispatch(setBook(book2));
  }, []);

  const buttonClick = () => {
    console.log(selectedBook);
  };

  const hasRead = () => {
    dispatch(setRead());
  };

  return (
    <>
      <div className={styles["bookDetail"]}>
        {/* {bookSelect.title ? <p>{bookSelect.title}</p> : <p>loading</p>} */}
        <img src={selectedBook.img} alt="" />
        <h3>{selectedBook.title}</h3>
        <h4>By {selectedBook.author}</h4>
        <p>{selectedBook.description}</p>
        {/* <button onClick={buttonClick}>CLICK ME BRAH</button> */}
        <span>
          <button onClick={buttonClick}>Add to Read List</button>
          <button onClick={hasRead}>Mark as Read</button>
        </span>
      </div>
    </>
  );
}

export default BookDetail;
