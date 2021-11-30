import React, { useState } from "react";
import { bookData } from "./bookData";
import BookContext from "./uitls/BookContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Search from "./pages/Search/Search";
import BookDetail from "./pages/BookDetail/BookDetail";

function App() {
  const [allBooks, setAllBooks] = useState({
    bookData,
  });

  return (
    <BookContext.Provider value={allBooks}>
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/bookDetail/:book" element={<BookDetail />} />
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
