import { React } from "react";
import Header from "../../components/Header";
import Banner from "../../components/Sản phẩm máy chủ/Banner";
import ListSever from "../../components/Sản phẩm máy chủ/ListSever";
import Footer from "../../components/Footer";
import "../../styles/style.css";
export default function Sever() {
  return (
    <>
      <Header />
      <Banner />
      <ListSever />
      <Footer />
    </>
  );
}
