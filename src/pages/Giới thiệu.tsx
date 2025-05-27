import React from "react";
import Header from "../components/Header";
import Banner from "../components/Giới thiệu/Banner";
import Section1 from "../components/Giới thiệu/section1";
import Section2 from "../components/Giới thiệu/section2";
import Section3 from "../components/Giới thiệu/section3";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import "../styles/style.css";
const Intro: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Partners />
      <Footer />
    </>
  );
};

export default Intro;
