import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";
import "../../styles/style.css";
import "../../styles/Tin tức/news_info.css";
import RelatedNews from "./RelatedNewsInternal";
import { NewsItem } from "../../types/news";

const { Title, Paragraph } = Typography;

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    fetch("/data/internal-news-detail.json")
      .then((res) => res.json())
      .then((data: { data: NewsItem[] }) => {
        const articles = data.data || [];
        const found = articles.find((item) => item.slug === id) || null;
        setNews(found);
        setNewsList(articles);
      })
      .catch((err) => console.error("Lỗi tải bài viết:", err));
  }, [id]);

  if (!news) return <div>{i18n.t("loading")}</div>;

  return (
    <section className="container">
      <div className="s-container">
        {news.date && <p className="date">{news.date}</p>}
        <Title level={1} className="news-title">
          {news.name}
        </Title>
        <div
          className="news-content-detail"
          dangerouslySetInnerHTML={{ __html: news.content }}
        />
        <hr />
        <RelatedNews
          newsList={newsList.filter((item) => item.slug !== id).slice(0, 5)}
        />
      </div>
    </section>
  );
};

export default NewsDetail;
