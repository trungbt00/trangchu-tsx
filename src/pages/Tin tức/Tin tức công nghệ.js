import { React } from "react";
import Header from "../../components/Header";
import Banner from "../../components/Tin tức/BannerTech";
import ListNews from "../../components/Tin tức/ListNewsTechnology";
import Footer from "../../components/Footer";
import "../../styles/style.css";
export default function Sever() {
  return (
    <>
      <Header />
      <Banner />
      <ListNews />
      <Footer />
    </>
  );
}
