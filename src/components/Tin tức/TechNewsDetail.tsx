import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Divider, Spin } from "antd";
import { useTranslation } from "react-i18next";
import "../../styles/style.css";
import "../../styles/Tin tức/news_info.css";
import RelatedNews from "./RelatedNewsTech";
import { NewsItem } from "../../types/news";

const { Title, Paragraph, Text } = Typography;

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetch("/data/tech-news-detail.json")
      .then((res) => res.json())
      .then((data: { data: NewsItem[] }) => {
        const articles = data.data || [];
        const found = articles.find((item) => item.slug === id) || null;
        setNews(found);
        setNewsList(articles);
      })
      .catch((err) => console.error("Lỗi tải bài viết:", err));
  }, [id]);

  if (!news) {
    return (
      <div style={{ textAlign: "center", marginTop: 48 }}>
        <Spin tip={t("loading") as string} />
      </div>
    );
  }

  return (
    <section className="container">
      <div className="s-container">
        {news.date && (
          <Text type="secondary" style={{ display: "block", marginBottom: 12 }}>
            {news.date}
          </Text>
        )}

        <Title level={2} className="news-title">
          {news.name}
        </Title>

        <div
          className="news-content-detail"
          dangerouslySetInnerHTML={{ __html: news.content }}
        />

        <Divider />
        <RelatedNews
          newsList={newsList.filter((item) => item.slug !== id).slice(0, 5)}
        />
      </div>
    </section>
  );
};

export default NewsDetail;
