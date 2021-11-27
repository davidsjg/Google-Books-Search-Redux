import React from "react";
import styles from "./Banner.module.css";

function Banner(props) {
  return (
    <>
      <div className={styles["banner"]}>
        <h1 className={styles["banner__main"]}>{props.mainTitle}</h1>
        <h3 className={styles["banner__sub"]}>{props.subTitle}</h3>
      </div>
    </>
  );
}

export default Banner;
