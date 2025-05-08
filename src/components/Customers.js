import React, { useEffect, useRef } from "react";
import "../styles/Khách hàng.css";
import logo1 from "../assets/Khách hàng logo/Logo Bộ Công An.png";
import logo2 from "../assets/Khách hàng logo/Logo_QĐNDVN.png";
import logo3 from "../assets/Khách hàng logo/Logo chính phủ.png";
import logo4 from "../assets/Khách hàng logo/Logo_Tong_Cuc_Thue.png";
import logo5 from "../assets/Khách hàng logo/Logo Hải quan.png";
import logo6 from "../assets/Khách hàng logo/logo-bidv-2022-dongphucsongphu.png";
import logo7 from "../assets/Khách hàng logo/vpbank-logo-inkythuatso-01.png";
import logo8 from "../assets/Khách hàng logo/mb-bank-logo-inkythuatso-01.png";
import logo9 from "../assets/Khách hàng logo/logo-vietcombank-inkythuatso- co slogan.png";
import logo10 from "../assets/Khách hàng logo/Logo VNPT.png";
import logo11 from "../assets/Khách hàng logo/logo-fpt-inkythuatso-1-01.png";
import logo12 from "../assets/Khách hàng logo/EVN.png";
import logo13 from "../assets/Khách hàng logo/logo-bo-nong-nghiep-inkythuatso-01.png";
import logo14 from "../assets/Khách hàng logo/Logo Bộ Tài Nguyên và Môi Trường Stamp.png";
import logo15 from "../assets/Khách hàng logo/Logo ACV.png";
import { useTranslation } from "react-i18next";
import "../styles/style.css";

export default function Customers() {
  const logosRef = useRef([]);
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

    logosRef.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => {
      logosRef.current.forEach((img) => {
        if (img) observer.unobserve(img);
      });
    };
  }, []);

  const customerLogos = [
    { src: logo1, alt: "Logo 1" },
    { src: logo2, alt: "Logo 2" },
    { src: logo3, alt: "Logo 3" },
    { src: logo4, alt: "Logo 4" },
    { src: logo5, alt: "Logo 5" },
    {
      src: logo6,
      alt: "Logo 6",
    },
    { src: logo7, alt: "Logo 7" },
    { src: logo8, alt: "Logo 8" },
    {
      src: logo9,
      alt: "Logo 9",
    },
    { src: logo10, alt: "Logo 10" },
    { src: logo11, alt: "Logo 11" },
    { src: logo12, alt: "Logo 12" },
    {
      src: logo13,
      alt: "Logo 13",
    },
    {
      src: logo14,
      alt: "Logo 14",
    },
    { src: logo15, alt: "Logo 15" },
  ];

  return (
    <section className="customers fade-in-on-scroll">
      <div className="container customers-container">
        <div className="customers-text">
          <h1>{i18n.t("customers")}</h1>
          <p>{i18n.t("customers-script1")}</p>
          <p>{i18n.t("customers-script2")}</p>
          <p>{i18n.t("customers-script3")}</p>
        </div>

        <div className="customers-logos">
          {customerLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              ref={(el) => (logosRef.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
