import React, { useEffect, useRef } from "react";
import { Row, Col, Typography } from "antd";
import { useTranslation } from "react-i18next";
import "../styles/Phủ sóng toàn quốc.css";
import "../styles/style.css";
import video from "../assets/images/0412.mp4";

const { Title, Paragraph } = Typography;

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
    <section className="nationwide fade-in-on-scroll">
      <div className="container">
        <Row gutter={[40, 40]} align="middle">
          <Col xs={24} md={12}>
            <div ref={textRef} className="text">
              <Title level={2} className="nationwide-heading">
                {i18n.t("national") as string}
              </Title>
              <Paragraph className="nationwide-content">
                {i18n.t("nationwide") as string}
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div ref={videoRef} className="image">
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
