import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./BookDetail.module.css";
import {
  selectBook,
  setBook,
  setRead,
  setUnread,
} from "../../features/book/bookSlice";
import BookContext from "../../uitls/BookContext";

function BookDetail() {
  const { book } = useSelector(selectBook);
  const dispatch = useDispatch();
  // const { bookData } = useContext(BookContext);

  const buttonClick = () => {
    console.log((state) => state.book);
  };

  const hasRead = () => {
    dispatch(setRead());
  };

  return (
    <>
      <div className={styles["bookDetail"]}>
        {/* {bookSelect.title ? <p>{bookSelect.title}</p> : <p>loading</p>} */}
        <img src={book.img} alt="" />
        <h3>{book.title}</h3>
        <h4>By {book.author}</h4>
        <p>{book.description}</p>
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
