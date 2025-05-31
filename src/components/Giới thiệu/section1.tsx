import { Row, Col, Typography, Card } from "antd";
import { useTranslation } from "react-i18next";
import img1 from "../../assets/Giới thiệu/t1.png";
import img2 from "../../assets/Giới thiệu/t2.png";
import img3 from "../../assets/Giới thiệu/t3.png";
import img4 from "../../assets/Giới thiệu/t4.png";
import "../../styles/style.css";
import "../../styles/Giới thiệu/section1.css";

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
    <section className="blue-box">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Title level={2} className="text-h2-section1">
          {t("why-choose-us")}
        </Title>

        <Row gutter={[24, 24]} justify="center">
          {reasons.map((reason, index) => (
            <Col
              key={index}
              xs={24}
              sm={12}
              md={5}
              lg={4}
              xl={4}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                bordered={false}
                hoverable
                className="intro-item"
                bodyStyle={{ padding: 0 }}
                style={{ width: "150px" }}
              >
                <img
                  src={reason.img}
                  alt={reason.alt}
                  className="image"
                  loading="lazy"
                />
                <Text className="title">{reason.label}</Text>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Section1;
