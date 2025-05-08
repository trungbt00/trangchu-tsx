import React, { useEffect, useRef } from "react";
import "../styles/Đối tác.css";
import { useTranslation } from "react-i18next";
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
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
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
