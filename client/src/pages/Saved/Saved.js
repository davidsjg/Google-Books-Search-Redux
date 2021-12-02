import React from "react";
import Hero from "../../components/Hero/Hero";
import Results from "../../components/Results/Results";

function Saved() {
  let savedTitleMain = "(React) Google Books Search";
  let savedTitleSub = "Search for and Save Books of Interest";
  return (
    <>
      <Hero mainTitle={savedTitleMain} subTitle={savedTitleSub} />
      <Results title={"Saved Books"} />
    </>
  );
}

export default Saved;
