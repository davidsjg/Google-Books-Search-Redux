import React from "react";
import Hero from "../../components/Hero/Hero";
import Results from "../../components/Results/Results";
import Header from "../../components/Header/Header";

function Saved() {
  let savedTitleMain = "(React) Google Books Search";
  let savedTitleSub = "Search for and Save Books of Interest";
  return (
    <>
      <Results title={"Saved Books"} />
    </>
  );
}

export default Saved;
