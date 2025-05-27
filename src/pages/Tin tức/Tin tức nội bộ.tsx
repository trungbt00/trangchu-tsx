import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Tin tức/BannerInternal";
import ListNews from "../../components/Tin tức/ListNewsInternal";
import Footer from "../../components/Footer";
import "../../styles/style.css";
const InternalNews: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <ListNews />
      <Footer />
    </>
  );
};

export default InternalNews;
