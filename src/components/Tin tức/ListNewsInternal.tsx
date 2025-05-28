import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Pagination } from "antd";
import "../../styles/style.css";
import "../../styles/Tin tức/news_info.css";

interface NewsItem {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  thumbnailImage: string;
  creationTime: string;
}

const ListNewsInternal: React.FC = () => {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch("/data/noi-bo.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.newsList.sort(
          (a: NewsItem, b: NewsItem) =>
            new Date(b.creationTime).getTime() -
            new Date(a.creationTime).getTime()
        );
        setNewsList(sorted);
      })
      .catch((err) => console.error("Lỗi tải bài viết:", err));
  }, []);

  const paginated = newsList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const firstNews = paginated[0];

  return (
    <section className="container">
      {firstNews && (
        <Row gutter={[0, 24]} align="middle" className="first-news">
          <Col xs={24} md={11}>
            <img
              src={firstNews.thumbnailImage}
              alt={firstNews.name}
              className="first-news-img"
            />
          </Col>
          <Col xs={24} md={12} style={{ textAlign: "left" }}>
            <div className="first-news-content">
              <Link
                to={`/tin-tuc/noi-bo/${firstNews.slug}`}
                style={{ textDecoration: "none" }}
              >
                <h3 className="first-news-title">{firstNews.name}</h3>
                <p className="first-news-content">
                  {firstNews.shortDescription}
                </p>
                <span className="first-news-link">XEM CHI TIẾT →</span>
              </Link>
            </div>
          </Col>
        </Row>
      )}

      <Row gutter={[24, 24]}>
        {paginated.slice(1).map((news) => (
          <Col xs={24} sm={12} md={8} key={news.id}>
            <Card
              hoverable
              cover={
                <img
                  alt={news.name}
                  src={news.thumbnailImage}
                  className="news-item-img"
                />
              }
            >
              <Link to={`/tin-tuc/noi-bo/${news.slug}`}>
                <div className="news-title">{news.name}</div>
                <p className="news-excerpt">{news.shortDescription}</p>
                <span className="news-link">XEM CHI TIẾT →</span>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="pagination">
        <Pagination
          current={currentPage}
          total={newsList.length}
          pageSize={itemsPerPage}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
          style={{ background: "none" }}
        />
      </div>
    </section>
  );
};

export default ListNewsInternal;
