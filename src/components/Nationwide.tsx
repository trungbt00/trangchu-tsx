import React, { useEffect, useRef } from "react";
import { Row, Col } from "antd";
import "../styles/Phủ sóng toàn quốc.css";
import video from "../assets/images/0412.mp4";
import { useTranslation } from "react-i18next";
import "../styles/style.css";

const Nationwide: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLDivElement | null>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <section className="nationwide">
      <div className="container">
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} md={12}>
            <div className="text" ref={textRef}>
              <h1 className="heading">{i18n.t("national") as string}</h1>
              <p>{i18n.t("nationwide") as string}</p>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="image" ref={videoRef}>
              <video
                className="nationwide-video"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Nationwide;
