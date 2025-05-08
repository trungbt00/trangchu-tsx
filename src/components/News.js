// src/components/News.js
import React, { useEffect, useRef } from "react";
import "../styles/Tin tức.css";
import image1 from "../assets/images/Tin tức/Image 1.png";
import image2 from "../assets/images/Tin tức/Image 2.png";
import image3 from "../assets/images/Tin tức/Image 3.png";
import { useTranslation } from "react-i18next";
import "../styles/style.css";

export default function News() {
  const cardsRef = useRef([]);
  const { i18n } = useTranslation();

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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const newsItems = [
    {
      img: image1,
      title:
        "GTEL tổ chức thành công hội nghị sơ kết 6 tháng đầu năm 2024, phương hướng, nhiệm vụ 6 tháng cuối năm 2024",
      desc: "Ngày 17/7, tại Hà Nội, Tổng công ty Công nghệ - Viễn thông Toàn cầu (GTEL) đã tổ chức Hội nghị sơ kết công tác 6 tháng đầu năm; phương hướng, nhiệm vụ 6 tháng cuối năm 2024.",
    },
    {
      img: image2,
      title:
        "GTEL trang bị kênh thông tin liên lạc Gmobile cho lực lượng tham gia bảo vệ ANTT ở cơ sở",
      desc: "Sáng ngày 01/7/2024, tại nhiều địa phương trên cả nước đã đồng thời diễn ra Lễ ra mắt lực lượng tham gia bảo vệ ANTT ở cơ sở. Đây là lực lượng nòng cốt, hỗ trợ lực lượng Công an chính quy trong các nhiệm vụ bảo vệ an ninh trật tự tại cơ sở.",
    },
    {
      img: image3,
      title:
        "Tổng công ty Công nghệ - Viễn thông Toàn cầu triển khai toàn diện và trọng tâm dịch vụ bưu chính qua hợp tác chiến lược với VIETNAM POST",
      desc: "Sáng ngày 21/10/2024, tại Hà Nội đã diễn ra Lễ ký kết thỏa thuận hợp tác chiến lược giữa GTEL, Bộ Công an và Tổng công ty VIETNAM POST.",
    },
  ];

  return (
    <section className="news">
      <div className="container">
        <h1 className="heading">{i18n.t("NEWS")}</h1>
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <div
              className="news-card"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <img src={item.img} alt={`Tin ${index + 1}`} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
