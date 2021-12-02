import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookData } from "./bookData";
import { setAllBooks } from "./features/book/bookSlice";
import BookContext from "./uitls/BookContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";

import "./App.css";
import Search from "./pages/Search/Search";
import BookDetail from "./pages/BookDetail/BookDetail";
import Saved from "./pages/Saved/Saved";

function App() {
  const [allBooks, setAllBooks] = useState({
    bookData,
  });

  return (
    <BookContext.Provider value={allBooks}>
      <Header />
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/bookDetail/:title" element={<BookDetail />} />
            <Route path="/saved" element={<Saved />} />
          </Routes>
        </>
      </Router>
    </BookContext.Provider>
  );
}

export default App;

{
  /* <BookContext.Provider value={allBooks}>
<Search />
</BookContext.Provider>  */
}
