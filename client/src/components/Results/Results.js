import React, { useContext } from "react";
import BookResult from "../../features/book/BookResult";
import BookContext from "../../uitls/BookContext";

import styles from "./Results.module.css";

function Results() {
  const { bookData } = useContext(BookContext);

  console.log(bookData);
  return (
    <>
      <div className={styles["results"]}>
        <p1>Results</p1>
        <BookResult />
      </div>
    </>
  );
}

export default Results;
