import React from "react";
import Header from "../../components/Header";
import NewsDetail from "../../components/Tin tức/InternalNewsDetail";
import Footer from "../../components/Footer";
import "../../styles/style.css";
const InternalNewsDetail: React.FC = () => {
  return (
    <>
      <Header />
      <NewsDetail />
      <Footer />
    </>
  );
};
export default InternalNewsDetail;
