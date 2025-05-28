import "../../styles/Tin tức/news_info.css";
import { useTranslation } from "react-i18next";
import { NewsItem } from "../../types/news";

interface RelatedNewsProps {
  newsList: NewsItem[];
}

const RelatedNews: React.FC<RelatedNewsProps> = ({ newsList }) => {
  const { i18n } = useTranslation();

  return (
    <div className="related-news-wrapper">
      <h3 className="related-news">{i18n.t("other_news") as string}</h3>
      {newsList.map((item) => (
        <div className="related-news-item" key={item.slug}>
          <div className="icon">➤</div>
          <div className="content">
            <a
              className="related-news-title"
              href={`/tin-tuc/noi-bo/${item.slug}`}
              style={{ textDecoration: "none" }}
            >
              {item.name}
            </a>
            <div className="related-news-date">{item.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedNews;
