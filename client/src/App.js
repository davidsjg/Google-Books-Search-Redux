import React, { useState } from "react";
import { bookData } from "./bookData";
import BookContext from "./uitls/BookContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Search from "./pages/Search/Search";
import BookDetail from "./pages/BookDetail/BookDetail";
import BookDetail2 from "./pages/BookDetail2/BookDetail2";

function App() {
  const [allBooks, setAllBooks] = useState({
    bookData,
  });

  return (
    <BookContext.Provider value={allBooks}>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/bookDetail" element={<BookDetail2 />} />
          </Routes>
        </div>
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
