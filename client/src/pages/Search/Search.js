import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import API from "../../uitls/API";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Searchbar from "../../components/Searchbar/Searchbar";
import Results from "../../components/Results/Results";
import { selectBook } from "../../features/book/bookSlice";
import { setAllBooks } from "../../features/book/bookSlice";
import { Outlet } from "react-router-dom";

function Search() {
  const dispatch = useDispatch();
  let searchTitleMain = "(React) Books Search";
  let searchTitleSub = "Search for and Save Harry Potter Books";

  const curBook = useSelector(selectBook);

  const { allBooks } = curBook;

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = () => {
    API.getBooks().then((book) => {
      dispatch(setAllBooks(book.data));
    });
  };

  return (
    <>
      <Searchbar />
      <Outlet />
      {/* <Results title={"Results"} /> */}
    </>
  );
}

export default Search;
