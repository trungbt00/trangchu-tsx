import React from "react";
import Header from "../components/Header";
import Contact from "../components/Liên hệ/Contact";
import Footer from "../components/Footer";
import "../styles/style.css";

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
