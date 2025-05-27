import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Sản phẩm máy chủ/Banner";
import ListSever from "../../components/Sản phẩm máy chủ/ListSever";
import Footer from "../../components/Footer";
import "../../styles/style.css";
const Server: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <ListSever />
      <Footer />
    </>
  );
};

export default Server;
