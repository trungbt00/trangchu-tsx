import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Row, Col, Card, Typography } from "antd";
import "../styles/Tin tức.css";
import "../styles/style.css";

interface NewsItem {
  slug: string;
  name: string;
  shortDescription: string;
  thumbnailImage?: string;
  image?: string;
}

const { Title, Paragraph } = Typography;

const News: React.FC = () => {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    fetch("/data/tech-news-detail.json")
      .then((res) => res.json())
      .then((data) => {
        setNewsList(data.data || []);
      })
      .catch((err) => console.error("Lỗi tải bài viết:", err));
  }, []);

  return (
    <section className="news">
      <div className="container">
        <Title level={2} className="heading">
          {i18n.t("NEWS") as string}
        </Title>

        <Row gutter={[24, 24]} className="news-row">
          {newsList.slice(0, 3).map((news) => (
            <Col key={news.slug} xs={24} sm={12} md={8}>
              <Link
                to={`/tin-tuc/cong-nghe/${news.slug}`}
                className="news-card-link"
              >
                <Card
                  hoverable
                  className="news-card"
                  cover={
                    <img
                      src={news.thumbnailImage || news.image || ""}
                      alt={news.name}
                      className="news-item-img"
                    />
                  }
                  style={{ padding: 10 }}
                >
                  <div
                    className="card-content-wrapper"
                    style={{ textAlign: "left" }}
                  >
                    <Title level={4} className="news-card-title">
                      {news.name}
                    </Title>
                    <Paragraph className="news-card-description">
                      {news.shortDescription}
                    </Paragraph>
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default News;
