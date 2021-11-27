import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Searchbar from "../../components/Searchbar/Searchbar";
import Results from "../../components/Results/Results";

function Search() {
  let searchTitleMain = "(React) Google Books Search";
  let searchTitleSub = "Search for and Save Books of Interest";
  return (
    <>
      <Header />
      <Banner mainTitle={searchTitleMain} subTitle={searchTitleSub} />
      <Searchbar />
      <Results />
    </>
  );
}

export default Search;
