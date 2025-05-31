import React, { useEffect, useRef } from "react";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";
import "../styles/Đối tác.css";
import "../styles/style.css";

import logo1 from "../assets/Đối tác/p1.png";
import logo2 from "../assets/Đối tác/p2.png";
import logo3 from "../assets/Đối tác/p3.png";
import logo4 from "../assets/Đối tác/p4.png";

const { Title } = Typography;

const Partners: React.FC = () => {
  const partnerRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = partnerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const logos: string[] = [logo1, logo2, logo3, logo4];

  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="partners fade-in-on-scroll" ref={partnerRef}>
      <div className="container">
        <Title level={2} className="partners-title">
          {t("partners")}
        </Title>

        <div className="partner-slide-wrapper">
          <div className="partner-slide-track">
            {repeatedLogos.map((logo, index) => (
              <img key={index} src={logo} alt={`logo-${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
