import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

function Home() {
  let searchTitleMain = "(React) Books Search";
  let searchTitleSub = "Search for and Save Harry Potter Books";

  return (
    <>
      <Header />
      <Hero mainTitle={searchTitleMain} subTitle={searchTitleSub} />
      <Outlet />
    </>
  );
}

export default Home;
