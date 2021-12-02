import React from "react";
import { useSelector, useDispatch } from "react-redux";
import API from "../../uitls/API";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Searchbar from "../../components/Searchbar/Searchbar";
import Results from "../../components/Results/Results";
import { selectBook } from "../../features/book/bookSlice";
import { setAllBooks } from "../../features/book/bookSlice";

function Search() {
  const dispatch = useDispatch();
  let searchTitleMain = "(React) Google Books Search";
  let searchTitleSub = "Search for and Save Books of Interest";

  const curBook = useSelector(selectBook);

  const { allBooks } = curBook;

  console.log(allBooks);

  const loadBooks = () => {
    API.getBooks().then((lake) => {
      dispatch(setAllBooks(lake));
    });
  };

  return (
    <>
      <Header />
      <Hero mainTitle={searchTitleMain} subTitle={searchTitleSub} />
      <Searchbar />
      <Results title={"Results"} />
    </>
  );
}

export default Search;
