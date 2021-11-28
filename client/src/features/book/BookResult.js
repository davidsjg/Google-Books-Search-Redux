import { useSelector, useDispatch } from "react-redux";
import { selectBook, setBook } from "./bookSlice";
import styles from "./BookResult.module.css";

function BookResult() {
  const book = useSelector(selectBook);

  return (
    <div className={styles["bookResult"]}>
      <div className={styles["bookResult__header"]}>
        <span className={styles["bookResult__span"]}>
          <h4>{book.title}</h4>
          <p>
            Written by <span>{book.author}</span>
          </p>
        </span>
        <span className={styles["bookResult__spanButton"]}>
          <button>View</button>
          <button>Save</button>
        </span>
      </div>
      <div className={styles["bookResult__body"]}>
        <img src={book.img} alt="" />
        <p>{book.description}</p>
      </div>
    </div>
  );
}

export default BookResult;
