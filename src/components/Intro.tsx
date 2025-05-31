import React, { useEffect, useRef, useState } from "react";
import { Typography, Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import "../styles/intro.css";
import "../styles/style.css";

const { Title, Paragraph } = Typography;

const Intro: React.FC = () => {
  const introRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
    };
  }, []);

  return (
    <section className="container">
      <div ref={introRef} className={`intro ${isVisible ? "visible" : ""}`}>
        <Title level={1} className="intro-title" style={{ margin: 0 }}>
          {" "}
          {i18n.t("company-name") as string}
        </Title>
        <Paragraph className="intro-content">
          {i18n.t("intro") as string}
        </Paragraph>
      </div>
    </section>
  );
};

export default Intro;
