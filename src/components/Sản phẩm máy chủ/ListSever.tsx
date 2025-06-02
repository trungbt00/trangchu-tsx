import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Typography, Image } from "antd";
import "../../styles/style.css";
import sp from "../../assets/Sản phẩm/Máy chủ/sp-mod.png";
import "../../styles/Sản phẩm máy chủ/product_info.css";

const { Text } = Typography;

interface Product {
  slug: string;
  name: string;
  thumbnailImage?: string;
}

export default function ListSever() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/data/may-chu.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.data || []))
      .catch((err) => console.error("Lỗi tải sản phẩm:", err));
  }, []);

  return (
    <section className="container">
      <Row gutter={[24, 24]} justify="center">
        {products.map((product) => (
          <Col
            key={product.slug}
            xs={24}
            sm={12}
            md={12}
            lg={8}
            xl={7}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Link
              to={`/san-pham/${product.slug}`}
              style={{
                textDecoration: "none",
                display: "flex",
                flex: "1 1 auto",
              }}
            >
              <Card hoverable bordered={false} className="product-card">
                <div className="card-logo">
                  <img src={sp} alt="GTSC" className="sp-mod" />
                </div>
                <div className="card-image">
                  <img
                    src={product.thumbnailImage || ""}
                    alt={product.name}
                    className="section-item-img"
                  />
                </div>
                <div className="card-title">
                  <Text className="fw-bold">{product.name}</Text>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </section>
  );
}
