import React from "react";
import { setAllBooks } from "./features/book/bookSlice";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import BookDetail from "./pages/BookDetail/BookDetail";
import Saved from "./pages/Saved/Saved";
import Header from "./components/Header/Header";

import "./App.css";
import Login from "./pages/Login/Login";
import HomeIndex from "./components/HomeIndex/HomeIndex";

function App() {
  let searchTitleMain = "(React) Books Search";
  let searchTitleSub = "Search for and Save Harry Potter Books";

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Search />} />
            <Route path="/search" element={<Search />} />
            <Route path="/saved" element={<Saved />} />
          </Route>
          {/* <Route path="/" element={<Search />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/bookDetail/:title" element={<BookDetail />} />
          {/* <Route path="/saved" element={<Saved />} /> */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
