import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./BookDetail.module.css";
import {
  selectBook,
  setAllBooks,
  setBook,
  setRead,
  setUnread,
} from "../../features/book/bookSlice";
import BookContext from "../../uitls/BookContext";
import { useParams } from "react-router-dom";

function BookDetail() {
  const { selectedBook } = useSelector(selectBook);
  const { allBooks } = useSelector(selectBook);
  const { bookData } = useContext(BookContext);
  const dispatch = useDispatch();
  let book2;

  const params = useParams();
  console.log(params);
  console.log(allBooks);

  const foundBook = allBooks.find((bookFind) => {});
  // const { bookData } = useContext(BookContext);

  useEffect(() => {
    book2 = JSON.parse(localStorage.getItem("book"));
    console.log(book2);

    dispatch(setBook(book2));
    dispatch(setAllBooks(bookData));
  }, []);

  const buttonClick = () => {
    console.log(selectedBook);
    console.log(allBooks);
  };

  const hasRead = () => {
    dispatch(setRead());
  };

  const notRead = () => {
    dispatch(setUnread());
  };

  return (
    <>
      <div className={styles["bookDetail"]}>
        <img src={selectedBook.img} alt="" />
        <h3>{selectedBook.title}</h3>
        <h4>By {selectedBook.author}</h4>
        <p>{selectedBook.description}</p>
        <span>
          <button onClick={buttonClick}>Add to Read List</button>

          {selectedBook.read ? (
            <button onClick={hasRead}>Need to Reed!</button>
          ) : (
            <button onClick={hasRead}>Mark as Read!</button>
          )}
        </span>
      </div>
    </>
  );
}

export default BookDetail;
