import { React } from "react";
import "../../styles/style.css";
import "../../styles/Tin tức/news_info.css";
import RelatedNews from "../../components/Tin tức/RelatedNews";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NewsDetail() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch("/data/news.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === id);
        setNews(found);
        setNewsList(data);
      });
  }, [id]);

  if (!news) return <div>Đang tải chi tiết...</div>;

  return (
    <section className="container">
      <div className="s-container"></div>
      <p className="date">{news.date}</p>
      <h1 className="news-title">{news.title}</h1>
      <p className="news-excerpt-detail">{news.excerpt}</p>
      <div
        className="news-content-detail"
        dangerouslySetInnerHTML={{ __html: news.content }}
      />
      <hr></hr>
      <RelatedNews
        newsList={newsList.filter((item) => item.id !== id).slice(0, 5)}
      />
    </section>
  );
}
