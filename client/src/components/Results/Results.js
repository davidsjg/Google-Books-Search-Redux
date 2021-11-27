import React from "react";
import BookResult from "../BookResult/BookResult";
import styles from "./Results.module.css";

function Results() {
  return (
    <>
      <div className={styles["results"]}>
        <p1>Results</p1>
        <BookResult />
        <BookResult />
        <BookResult />
      </div>
    </>
  );
}

export default Results;
