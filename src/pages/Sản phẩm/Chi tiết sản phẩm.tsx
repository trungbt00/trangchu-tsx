import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Sản phẩm máy chủ/BannerProduct";
import ProductDetail from "../../components/Sản phẩm máy chủ/ProductDetail";
import Footer from "../../components/Footer";
import "../../styles/style.css";
const SeverProductDetail: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <ProductDetail />
      <Footer />
    </>
  );
};

export default SeverProductDetail;
