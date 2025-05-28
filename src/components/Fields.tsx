import React from "react";
import { useTranslation } from "react-i18next";

import systemIntegrationImg from "../assets/images/TÍCH HỢP HỆ THỐNG.jpg";
import cloudComputingImg from "../assets/images/TRUNG TÂM DỮ LIỆU VÀ ĐIỆN TOÁN ĐÁM MÂY.jpg";
import informationSecurityImg from "../assets/images/ATTT.jpg";

import icon1 from "../assets/images/Vector/Vector 1.png";
import icon2 from "../assets/images/Vector/Vector 2.png";
import icon3 from "../assets/images/Vector/Vector 3.png";

import "../styles/style.css";
import "../styles/Lĩnh vực hoạt động.css";

const Fields: React.FC = () => {
  const { i18n } = useTranslation();

  const data = [
    {
      img: systemIntegrationImg,
      icon: icon1,
      text: i18n.t("system-integration"),
      alt: "Tích hợp hệ thống",
    },
    {
      img: cloudComputingImg,
      icon: icon2,
      text: i18n.t("data-center"),
      alt: "Trung tâm dữ liệu và điện toán đám mây",
    },
    {
      img: informationSecurityImg,
      icon: icon3,
      text: i18n.t("info-assurance"),
      alt: "An toàn thông tin",
    },
  ];

  return (
    <section className="fields">
      <div className="container">
        <h1 className="heading">{i18n.t("field") as string}</h1>
        <div className="field-grid">
          {data.map((item, index) => (
            <div className="field-item" key={index}>
              <img src={item.img} alt={item.alt} loading="lazy" />
              <div className="field-caption">
                <img src={item.icon} alt={`Icon ${index + 1}`} loading="lazy" />
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fields;
