import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQbLqn4nbuq29JustsXI2y6RY8IdvqO5g",
  authDomain: "g-booksfinder.firebaseapp.com",
  projectId: "g-booksfinder",
  storageBucket: "g-booksfinder.appspot.com",
  messagingSenderId: "968588806880",
  appId: "1:968588806880:web:78679defcc4b92a68f5e85",
  measurementId: "G-N5X2BT0EZ0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// const db = app.getFirestore();

// export { db };
