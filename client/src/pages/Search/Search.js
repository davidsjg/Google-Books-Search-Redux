import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";

function Search() {
  let searchTitleMain = "(React) Google Books Search";
  let searchTitleSub = "Search for and Save Books of Interest";
  return (
    <>
      <Header />
      <Banner mainTitle={searchTitleMain} subTitle={searchTitleSub} />
    </>
  );
}

export default Search;
