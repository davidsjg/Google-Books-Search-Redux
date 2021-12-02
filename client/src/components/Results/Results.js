import React, { useContext } from "react";
import BookResult from "../../features/book/BookResult";
import BookContext from "../../uitls/BookContext";

import styles from "./Results.module.css";

function Results(props) {
  const { bookData } = useContext(BookContext);

  return (
    <>
      <div className={styles["results"]}>
        <p1>{props.title}</p1>
        <BookResult />
      </div>
    </>
  );
}

export default Results;
