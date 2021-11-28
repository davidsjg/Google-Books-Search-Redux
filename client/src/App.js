import React, { useState } from "react";
import { bookData } from "./bookData";
import BookContext from "./uitls/BookContext";

import "./App.css";
import Search from "./pages/Search/Search";

function App() {
  const [allBooks, setAllBooks] = useState({
    bookData,
  });

  return (
    <>
      <BookContext.Provider value={allBooks}>
        <Search />
      </BookContext.Provider>
    </>
  );
}

export default App;
