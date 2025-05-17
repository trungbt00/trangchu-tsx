import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/style.css";
import "../../styles/Tin tức/news_info.css";

export default function ListSever() {
  const [newsList, setNewsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch("/data/news.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setNewsList(sorted);
      })
      .catch((err) => console.error("Lỗi tải bài viết:", err));
  }, []);

  const totalPages = Math.ceil(newsList.length / itemsPerPage);
  const paginated = newsList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Get the first item for the current page (not necessarily the latest)
  const firstNews = paginated[0];
  return (
    <section className="container">
      {firstNews && (
        <div className="first-news">
          <div className="first-news-img-container">
            <img
              src={firstNews.img}
              alt={firstNews.title}
              className="first-news-img"
            />
          </div>
          <div className="first-news-content">
            <Link
              to={`/tin-tuc/${firstNews.id}`}
              style={{ textDecoration: "none" }}
            >
              <h3>{firstNews.title}</h3>
              <p>{firstNews.excerpt}</p>
              <a href={`/tin-tuc/${firstNews.id}`} className="first-news-link">
                XEM CHI TIẾT →
              </a>
            </Link>
          </div>
        </div>
      )}

      <div className="news-grid">
        {paginated.slice(1).map((news) => (
          <div className="news-item" key={news.id}>
            <Link to={`/tin-tuc/${news.id}`} style={{ textDecoration: "none" }}>
              <img src={news.img} alt={news.title} className="news-item-img" />
              <div className="news-title">{news.title}</div>
              <p className="news-excerpt">{news.excerpt}</p>
              <a href={news.link} className="news-link">
                XEM CHI TIẾT →
              </a>
            </Link>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          className="page-button arrow"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {[...Array(totalPages).keys()].map((i) => (
          <button
            key={i + 1}
            className={`page-button ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="page-button arrow"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
