import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

function HomeIndex() {
  let searchTitleMain = "(React) Books Search";
  let searchTitleSub = "Search for and Save Harry Potter Books";

  return (
    <>
      <Header />
      <Hero mainTitle={searchTitleMain} subTitle={searchTitleSub} />
    </>
  );
}

export default HomeIndex;
