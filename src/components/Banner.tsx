import React from "react";
import bannerImage from "../assets/images/MAN08824.jpg";
import "../styles/style.css";
import { Image, Row, Col } from "antd";

const Banner: React.FC = () => {
  return (
    <section className="container-banner-page">
      <Image
        src={bannerImage}
        alt="Banner"
        preview={false}
        width="100%"
        height="auto"
        style={{ objectFit: "cover" }}
      />
    </section>
  );
};

export default Banner;
