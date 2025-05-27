import React from "react";
import image from "../assets/images/MAN08824.jpg"; // Import ảnh
import "../styles/style.css";

const Banner: React.FC = () => {
  return (
    <section className="banner-wrapper">
      <img src={image} alt="Banner" className="banner-img" />
    </section>
  );
};

export default Banner;
