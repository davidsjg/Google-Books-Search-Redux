import React from "react";
import { setAllBooks } from "./features/book/bookSlice";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Search from "./pages/Search/Search";
import BookDetail from "./pages/BookDetail/BookDetail";
import Saved from "./pages/Saved/Saved";
import Header from "./components/Header/Header";

import "./App.css";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bookDetail/:title" element={<BookDetail />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
