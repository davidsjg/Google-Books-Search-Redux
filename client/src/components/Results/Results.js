import React from "react";
import BookResult from "../../features/book/BookResult";

import styles from "./Results.module.css";

function Results() {
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
