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
  let isSaved;

  let newSavedBook;

  useEffect(() => {
    savedBooks.map((savedBook) => {
      if (savedBook.title === selectedBook.title) newSavedBook = savedBook;
    });
  }, []);

  // let bookFind;
  // console.log(params);
  // useEffect(() => {
  //   bookFind = allBooks.find(({ title }) => title === params.title);
  //   dispatch(setBook(bookFind));
  // }, []);

  // useEffect(() => {
  //   savedBooks.map((savedBook) => {
  //     if (savedBook.title === singleBook.title) {
  //       console.log(savedBook.title);
  //       console.log(singleBook.title);
  //       isSaved = true;
  //       dispatch(setBook(savedBook));
  //     }
  //     return isSaved;
  //   });
  // }, []);

  const buttonClick = () => {
    // console.log(selectedBook);
    console.log(allBooks);
  };

  const hasRead = () => {
    let bookInSaved;

    savedBooks.length > 0
      ? savedBooks.map((booksSaved) => {
          if (booksSaved.title === selectedBook.title) {
            console.log("book is in saved");
            bookInSaved = true;
          }
          dispatch(setRead(selectedBook));
          return bookInSaved;
        })
      : dispatch(setRead(selectedBook));

    console.log(bookInSaved);

    if (!bookInSaved) {
      console.log("book is not in saved");
      dispatch(setRead(selectedBook));
      console.log(selectedBook);

      // setNewSaved(selectedBook);
    }
  };

  const setNewSaved = (book) => {
    console.log(selectedBook);
    dispatch(setSavedBooks(book));
  };

  const notRead = () => {
    dispatch(setUnread(selectedBook));
  };

  const addReadList = () => {
    let bookInSaved = false;

    savedBooks.map((booksSaved) => {
      if (booksSaved.title === selectedBook.title) {
        bookInSaved = true;
      }
      return bookInSaved;
    });

    if (!bookInSaved) {
      dispatch(setSavedBooks(selectedBook));
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
      <button onClick={handleClick}>sup yall</button>
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
