import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Tuyển dụng/Banner";
import List from "../../components/Tuyển dụng/ListJob";
import Footer from "../../components/Footer";
import "../../styles/style.css";
const Jobs: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <List />
      <Footer />
    </>
  );
};
export default Jobs;
