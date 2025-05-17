import React from "react";
import "../../styles/Tin tức/news_info.css";
import { useTranslation } from "react-i18next";

export default function RelatedNews({ newsList }) {
  const { i18n } = useTranslation();

  return (
    <div className="related-news-wrapper">
      <h3 className="related-news">{i18n.t("other_news")}</h3>
      {newsList.map((item, index) => (
        <div className="related-news-item" key={index}>
          <div className="icon">➤</div>
          <div className="content">
            <a
              className="related-news-title"
              href={`/tin-tuc/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              {item.title}
            </a>
            <div className="related-news-date">{item.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
