import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import "../../styles/style.css";
import sp from "../../assets/Sản phẩm/Máy chủ/sp-mod.png";
import "../../styles/Sản phẩm máy chủ/product_info.css";

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
      <Row gutter={[24, 24]} justify="center" align="stretch">
        {products.map((product) => (
          <Col
            key={product.slug}
            xs={24}
            sm={12}
            md={12}
            lg={8}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Link
              to={`/san-pham/${product.slug}`}
              style={{
                textDecoration: "none",
              }}
            >
              <div className="product-card">
                <img className="sp-mod" src={sp} alt="sp-mod" loading="lazy" />
                <img
                  className="section-item-img"
                  src={product.thumbnailImage || ""}
                  alt={product.name}
                />
                <div className="pt-3 fw-bold">{product.name}</div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </section>
  );
}
