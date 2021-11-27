import { useSelector, useDispatch } from "react-redux";
import { selectBook, setBook } from "./bookSlice";
import styles from "./BookResult.module.css";

function BookResult() {
  const book = useSelector(selectBook);
  console.log(book);
  return (
    <div className={styles["bookResult"]}>
      <div className={styles["bookResult__header"]}>
        <span className={styles["bookResult__span"]}>
          <h4>Harry Potter's Book Shelf</h4>
          <p>
            Written by <span>Noob MaGee</span>
          </p>
        </span>
        <span className={styles["bookResult__spanButton"]}>
          <button>View</button>
          <button>Save</button>
        </span>
      </div>
      <div className={styles["bookResult__body"]}>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/91ocU8970hL.jpg"
          alt=""
        />
        <p>
          Harry Potter is a book about a boy Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Assumenda, libero non ipsam ullam in
          odit distinctio officia consequuntur commodi cum accusantium excepturi
          quibusdam inventore nam ad ipsum veritatis tempore maxime. Voluptatem
          perferendis in deleniti, nemo delectus possimus neque labore velit
          laudantium fugit consequatur nam minus aperiam harum sapiente nesciunt
          ullam earum autem sequi iste. Ducimus quisquam quod sit autem deleniti
          aspernatur vitae expedita dolore laudantium tempore eaque excepturi,
          explicabo voluptatum omnis odit. Itaque ut optio eaque qui, similique
          in laboriosam fugiat laudantium? Ex maxime tenetur, omnis sit odit
          veritatis voluptatem atque aliquam quo recusandae dolorem asperiores
          autem, illo magnam ad.
        </p>
      </div>
    </div>
  );
}

export default BookResult;
