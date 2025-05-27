import { Row, Col } from "antd";
import "../../styles/style.css";
import img1 from "../../assets/Giới thiệu/tn.png";
import img2 from "../../assets/Giới thiệu/sm.png";
import "../../styles/Giới thiệu/section2.css";
import { useTranslation } from "react-i18next";

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
      <Row gutter={[24, 24]} justify="center" className="section1-grid">
        {sections.map((item, index) => (
          <Col key={index} xs={24} sm={24} md={12}>
            <div className="section-item2">
              <div className="red-box">
                <h2 className="text-h2">{item.title}</h2>
              </div>
              <img src={item.img} alt={item.alt} loading="lazy" />
              <div className="text-p">{item.content}</div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Section2;
