import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";
import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = (e) => {
    e.preventDefault();

    // auth.signInWithEmailAndPassword(email, password);
  };
  const register = (e) => {
    e.preventDefault();
    console.log(email.target.value);
    console.log(password.target.value);
  };
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

          <div className={styles["login_display"]}>
            <h2>Google Books</h2>
            <h3>Welcome to Google Books</h3>
            <form>
              <span>
                <p>Email</p>
                <input
                  className={styles["input1"]}
                  type="text"
                  onChange={(letter) => setEmail(letter)}
                />
                <p>Password</p>
                <input
                  className={styles["input2"]}
                  type="text"
                  onChange={(letter) => setPassword(letter)}
                />
                <div
                  className={styles["signIn_button"]}
                  onClick={login}
                  type="submit"
                >
                  Sign In
                </div>
              </span>
              <div className={styles["orLine"]}>
                <span>--------or--------</span>
              </div>
              {/* <span className={styles['line1']}></span>or<span className={styles['line1']}> */}
              <div className={styles["register_button"]} onClick={register}>
                Create Account
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
