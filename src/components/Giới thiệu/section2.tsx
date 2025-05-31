import { Row, Col, Card, Typography, Image } from "antd";
import { useTranslation } from "react-i18next";
import img1 from "../../assets/Giới thiệu/tn.png";
import img2 from "../../assets/Giới thiệu/sm.png";
import "../../styles/style.css";
import "../../styles/Giới thiệu/section2.css";

const { Title, Paragraph } = Typography;

const Section2: React.FC = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t("vision"),
      img: img1,
      alt: "Tầm nhìn",
      content: t("vision-content"),
    },
    {
      title: t("mission"),
      img: img2,
      alt: "Sứ mệnh",
      content: t("mission_content"),
    },
  ];

  return (
    <section className="container">
      <Row gutter={[24, 24]} justify="center">
        {sections.map((item, index) => (
          <Col key={index} xs={24} sm={24} md={12}>
            <Card
              bordered={false}
              bodyStyle={{
                padding: 0,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
              className="section-item2"
            >
              <div className="red-box">
                <Title level={3} className="text-h2-section2">
                  {item.title}
                </Title>
              </div>
              <Image
                src={item.img}
                alt={item.alt}
                preview={false}
                style={{ width: "auto" }}
                className="section-item2-img"
              />
              <Paragraph className="text-p">{item.content}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Section2;
