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
        <h1 className="heading">{i18n.t("NEWS")}</h1>
        <div className="news-grid">
          {newsList.slice(0, 3).map((news) => (
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
