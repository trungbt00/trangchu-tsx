// src/components/News.js
import { useEffect, useState } from "react";
import "../styles/Tin tức.css";
import { useTranslation } from "react-i18next";
import "../styles/style.css";
import { Link } from "react-router-dom";

export default function News() {
  const [newsList, setNewsList] = useState([]);
  const { i18n } = useTranslation();

  useEffect(() => {
<<<<<<< HEAD
    fetch("/data/tech-news-detail.json")
      .then((res) => res.json())
      .then((data) => {
        setNewsList(data.data || []);
=======
    fetch("/data/news.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setNewsList(sorted);
>>>>>>> 456d5a87eb84e007de2a185ad5933c23eea74f52
      })
      .catch((err) => console.error("Lỗi tải bài viết:", err));
  }, []);

  return (
    <section className="news">
      <div className="container">
        <h1 className="heading">{i18n.t("NEWS")}</h1>
        <div className="news-grid">
          {newsList.slice(0, 3).map((news) => (
<<<<<<< HEAD
            <div className="news-card" key={news.slug}>
              <Link
                to={`/tin-tuc/cong-nghe/${news.slug}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  src={news.thumbnailImage || news.image || ""}
                  alt={news.name}
                  className="news-item-img"
                />
                <h3>{news.name}</h3>
                <p>{news.shortDescription}</p>
=======
            <div className="news-card" key={news.id}>
              <Link
                to={`/tin-tuc/${news.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  src={news.img}
                  alt={news.title}
                  className="news-item-img"
                />
                <h3>{news.title}</h3>
                <p>{news.excerpt}</p>
>>>>>>> 456d5a87eb84e007de2a185ad5933c23eea74f52
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
