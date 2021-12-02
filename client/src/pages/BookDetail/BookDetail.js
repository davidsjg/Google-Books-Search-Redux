import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./BookDetail.module.css";
import {
  saveBook,
  selectBook,
  setAllBooks,
  setBook,
  setRead,
  setUnread,
} from "../../features/book/bookSlice";
import BookContext from "../../uitls/BookContext";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header/Header";

function BookDetail() {
  const { selectedBook } = useSelector(selectBook);
  const { allBooks } = useSelector(selectBook);
  const { bookData } = useContext(BookContext);
  const dispatch = useDispatch();
  let book2;

  console.log(selectedBook);
  const params = useParams();

  dispatch(setAllBooks(bookData));

  let bookFind = allBooks.find(({ title }) => title === params.title);

  useEffect(() => {
    console.log(params.title);

    console.log(allBooks);

    console.log(bookFind);
    dispatch(setBook(bookFind));
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

  const addReadList = () => {
    dispatch(saveBook(selectedBook));
  };

  return (
    <>
      <Header />
      <div className={styles["bookDetail"]}>
        <span className={styles["bookDetail__top"]}>
          <Link to={"/"}>
            <button className={styles["returnHome"]}>Return Home</button>
          </Link>
          <img src={selectedBook.img} alt="" />
          {selectedBook.read ? (
            <div className={styles["displayRead"]}>Read!</div>
          ) : (
            <div className={styles["displayUnread"]}>Need to Read!</div>
          )}
        </span>

        <h3>{selectedBook.title}</h3>
        <h4>By {selectedBook.author}</h4>
        <p>{selectedBook.description}</p>
        <span>
          <button onClick={addReadList}>Add to Read List</button>

          {selectedBook.read ? (
            <button onClick={notRead}>Need to Reed!</button>
          ) : (
            <button onClick={hasRead}>Mark as Read!</button>
          )}
        </span>
      </div>
    </>
  );
}

export default BookDetail;
