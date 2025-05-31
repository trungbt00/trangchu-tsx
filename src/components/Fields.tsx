import React from "react";
import { useTranslation } from "react-i18next";
import { Row, Col, Card, Typography } from "antd";

import systemIntegrationImg from "../assets/images/TÍCH HỢP HỆ THỐNG.jpg";
import cloudComputingImg from "../assets/images/TRUNG TÂM DỮ LIỆU VÀ ĐIỆN TOÁN ĐÁM MÂY.jpg";
import informationSecurityImg from "../assets/images/ATTT.jpg";

import icon1 from "../assets/images/Vector/Vector 1.png";
import icon2 from "../assets/images/Vector/Vector 2.png";
import icon3 from "../assets/images/Vector/Vector 3.png";

import "../styles/style.css";
import "../styles/Lĩnh vực hoạt động.css";

const { Title } = Typography;

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
        <Title level={2} className="fields-heading">
          {i18n.t("field") as string}
        </Title>
        <Row gutter={[24, 24]} justify="center">
          {data.map((item, index) => (
            <Col xs={24} sm={12} md={8} key={index} className="field-col">
              <Card
                hoverable
                className="field-item"
                bodyStyle={{ padding: 10 }}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="field-item-img"
                  loading="lazy"
                />
                <div className="field-caption-row">
                  <img
                    src={item.icon}
                    alt={`Icon ${index + 1}`}
                    className="field-icon"
                    loading="lazy"
                  />
                  <span className="field-text">{item.text}</span>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Fields;
