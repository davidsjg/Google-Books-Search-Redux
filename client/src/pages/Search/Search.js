import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Searchbar from "../../components/Searchbar/Searchbar";
import Results from "../../components/Results/Results";

function Search() {
  let searchTitleMain = "(React) Google Books Search";
  let searchTitleSub = "Search for and Save Books of Interest";
  return (
    <>
      <Header />
      <Hero mainTitle={searchTitleMain} subTitle={searchTitleSub} />
      <Searchbar />
      <Results />
    </>
  );
}

export default Search;
