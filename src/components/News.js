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
    fetch("/data/news.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setNewsList(sorted);
      })
      .catch((err) => console.error("Lỗi tải bài viết:", err));
  }, []);

  return (
    <section className="news">
      <div className="container">
        <h1 className="heading">{i18n.t("NEWS")}</h1>
        <div className="news-grid">
          {newsList.slice(0, 3).map((news) => (
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
