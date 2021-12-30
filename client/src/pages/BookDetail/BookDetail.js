import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./BookDetail.module.css";
import {
  selectBook,
  setAllBooks,
  setBook,
  setRead,
  setUnread,
  setSavedBooks,
} from "../../features/book/bookSlice";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header/Header";

function BookDetail() {
  const { allBooks } = useSelector(selectBook);
  const { selectedBook } = useSelector(selectBook);
  const { singleBook } = useSelector(selectBook);
  const { savedBooks } = useSelector(selectBook);
  const dispatch = useDispatch();
  const params = useParams();

  console.log(singleBook);

  // let bookFind;
  // console.log(params);
  // useEffect(() => {
  //   bookFind = allBooks.find(({ title }) => title === params.title);
  //   dispatch(setBook(bookFind));
  // }, []);

  const buttonClick = () => {
    // console.log(selectedBook);
    console.log(allBooks);
  };

  const hasRead = () => {
    let bookInSaved = false;

    savedBooks.map((booksSaved) => {
      if (booksSaved.title === singleBook.title) {
        bookInSaved = true;
      }
      return bookInSaved;
    });

    console.log(bookInSaved);

    dispatch(setRead(singleBook));
  };

  const notRead = () => {
    dispatch(setUnread());
  };

  const addReadList = () => {
    let bookInSaved = false;

    savedBooks.map((booksSaved) => {
      if (booksSaved.title === singleBook.title) {
        bookInSaved = true;
      }
      return bookInSaved;
    });

    if (!bookInSaved) {
      dispatch(setSavedBooks(singleBook));
    } else {
      return null;
    }
  };

  const handleClick = () => {
    console.log(selectedBook);
  };

  return (
    <>
      <Header />

      <div className={styles["bookDetail"]}>
        <span className={styles["bookDetail__top"]}>
          <Link to={"/"}>
            <button className={styles["returnHome"]}>Return Home</button>
          </Link>
          <img src={singleBook.img} alt="" />
          {singleBook.read ? (
            <div className={styles["displayRead"]}>Read!</div>
          ) : (
            <div className={styles["displayUnread"]}>Need to Read!</div>
          )}
        </span>

        <h3>{singleBook.title}</h3>
        <h4>By {singleBook.author}</h4>
        <p>{singleBook.description}</p>
        <span>
          <button onClick={addReadList}>Add to Read List</button>

          {singleBook.read ? (
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
