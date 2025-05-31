import { Typography, Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import { NewsItem } from "../../types/news";
import "../../styles/Tin tức/news_info.css";

const { Title, Text, Link: AntLink } = Typography;

interface RelatedNewsProps {
  newsList: NewsItem[];
}

const RelatedNews: React.FC<RelatedNewsProps> = ({ newsList }) => {
  const { t } = useTranslation();

  return (
    <div className="related-news-wrapper">
      <Title level={2} className="related-news">
        {t("other_news")}
      </Title>

      {newsList.map((item) => (
        <Row className="related-news-item" key={item.slug}>
          <Col xs={1} sm={1} md={1} lg={1} className="icon">
            ➤
          </Col>
          <Col xs={22} sm={22} md={22} lg={22} flex="auto" className="content">
            <a
              href={`/tin-tuc/cong-nghe/${item.slug}`}
              className="related-news-title"
              style={{ textAlign: "left" }}
            >
              {item.name}
            </a>
            {/* <div className="related-news-date">{item.date}</div> */}
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default RelatedNews;
