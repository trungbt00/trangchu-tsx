import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Tin tức/BannerTech";
import ListNews from "../../components/Tin tức/ListNewsTechnology";
import Footer from "../../components/Footer";
import "../../styles/style.css";
const TechNews: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <ListNews />
      <Footer />
    </>
  );
};
export default TechNews;
