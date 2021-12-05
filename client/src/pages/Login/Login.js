import React from "react";
import styles from "./Login.module.css";

function Login() {
  return (
    <>
      <div className={styles["login"]}>
        <div className={styles["login_container"]}>
          <div className={styles["login_image"]}>
            <img src="/images/gbooks.png" className={styles["gbooksImg"]} />
            <span className={styles["login_image_text"]}>
              <h3>Take a Look...</h3>
              <h4>It's in a book - on google.</h4>
            </span>
          </div>

          <div className={styles["login_form"]}>
            <p>sup brah</p>
            <p>sup brah</p>
            <p>sup brah</p>
            <p>sup brah</p>
            <p>sup brah</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
