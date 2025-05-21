import { React, useEffect, useState } from "react";
import "../../styles/style.css";
import "../../styles/Tin tức/news_info.css";
import RelatedNews from "./RelatedNewsInternal";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NewsDetail() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [newsList, setNewsList] = useState([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    fetch("/data/internal-news-detail.json")
      .then((res) => res.json())
      .then((data) => {
        const articles = data.data || [];
        const found = articles.find((item) => item.slug === id);
        setNews(found);
        setNewsList(articles);
      })
      .catch((err) => console.error("Lỗi tải bài viết:", err));
  }, [id]);

  if (!news) return <div>{i18n.t("loading")}</div>;

  return (
    <section className="container">
      <div className="s-container"></div>
      {news.date && <p className="date">{news.date}</p>}
      <h1 className="news-title">{news.name}</h1>
      <p className="news-excerpt-detail">{news.shortDescription}</p>
      <div
        className="news-content-detail"
        dangerouslySetInnerHTML={{ __html: news.content }}
      />
      <hr />
      <RelatedNews
        newsList={newsList.filter((item) => item.slug !== id).slice(0, 5)}
      />
    </section>
  );
}
