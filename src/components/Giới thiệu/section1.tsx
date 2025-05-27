import { Row, Col, Typography } from "antd";
import "../../styles/style.css";
import img1 from "../../assets/Giới thiệu/t1.png";
import img2 from "../../assets/Giới thiệu/t2.png";
import img3 from "../../assets/Giới thiệu/t3.png";
import img4 from "../../assets/Giới thiệu/t4.png";
import "../../styles/Giới thiệu/section1.css";
import { useTranslation } from "react-i18next";

const { Title, Text } = Typography;

const Section1: React.FC = () => {
  const { t } = useTranslation();

  const reasons = [
    { img: img1, label: t("R1"), alt: "KINH NGHIỆM DÀY DẠN" },
    { img: img2, label: t("R2"), alt: "GIẢI PHÁP TOÀN DIỆN" },
    { img: img3, label: t("R3"), alt: "DỊCH VỤ CHẤT LƯỢNG" },
    { img: img4, label: t("R4"), alt: "UY TÍN VÀ THƯƠNG HIỆU" },
  ];

  return (
    <section className="container">
      <div className="blue-box">
        <h2 className="text-h2">{t("why-choose-us")}</h2>
        <Row gutter={[16, 24]} justify="center">
          {reasons.map((reason, index) => (
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              xxl={6}
              key={index}
              className="intro-item-wrapper"
            >
              <div className="intro-item">
                <img
                  src={reason.img}
                  alt={reason.alt}
                  loading="lazy"
                  className="image"
                />
                <p className="title">{reason.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Section1;
