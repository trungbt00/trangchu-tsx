import React, { useEffect, useRef } from "react";
import "../styles/Đối tác.css";
import { useTranslation } from "react-i18next";
import logo1 from "../assets/Đối tác/p1.png";
import logo2 from "../assets/Đối tác/p2.png";
import logo3 from "../assets/Đối tác/p3.png";
import logo4 from "../assets/Đối tác/p4.png";
import "../styles/style.css";

const Partners = () => {
  const partnerRef = useRef(null);
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

    if (partnerRef.current) observer.observe(partnerRef.current);

    return () => {
      if (partnerRef.current) observer.unobserve(partnerRef.current);
    };
  }, []);

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo1,
    logo2,
    logo3,
    logo4,
    logo1,
    logo2,
    logo3,
    logo4,
    logo1,
    logo2,
    logo3,
    logo4,
  ];

  return (
    <section className="partners fade-in-on-scroll" ref={partnerRef}>
      <div className="container">
        <h1 className="heading">{t("partners")}</h1>
        <div className="partner-slide-wrapper">
          <div className="partner-slide-track">
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt={`logo-${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
