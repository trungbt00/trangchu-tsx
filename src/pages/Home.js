import { React } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Intro from "../components/Intro";
import Fields from "../components/Fields";
import Customers from "../components/Customers";
import Nationwide from "../components/Nationwide";
import News from "../components/News";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import "../styles/style.css";
export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Intro />
      <Fields />
      <Customers />
      <Nationwide />
      <News />
      <Partners />
      <Footer />
    </>
  );
}
