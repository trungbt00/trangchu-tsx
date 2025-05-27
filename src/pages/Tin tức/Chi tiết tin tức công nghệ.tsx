import React from "react";
import Header from "../../components/Header";
import NewsDetail from "../../components/Tin tức/TechNewsDetail";
import Footer from "../../components/Footer";
import "../../styles/style.css";
const TechNewsDetail: React.FC = () => {
  return (
    <>
      <Header />
      <NewsDetail />
      <Footer />
    </>
  );
};

export default TechNewsDetail;
