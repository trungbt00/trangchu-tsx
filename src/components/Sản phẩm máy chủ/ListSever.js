import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/style.css";
import sp from "../../assets/Sản phẩm/Máy chủ/sp-mod.png";
import "../../styles/Sản phẩm máy chủ/product_info.css";

export default function ListSever() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/may-chu.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.data || []))
      .catch((err) => console.error("Lỗi tải sản phẩm:", err));
  }, []);

  return (
    <section className="container">
      <div className="grid-container">
        {products.map((product) => (
          <Link
            to={`/san-pham/${product.slug}`}
            key={product.slug}
            style={{ textDecoration: "none" }}
            className="aaa"
          >
            <div className="section-item">
              <img className="sp-mod" src={sp} alt="sp-mod" loading="lazy" />
              <img
                className="section-item-img"
                src={product.thumbnailImage || ""}
                alt={product.name}
              />
              <div className="pt-3 fw-bold">{product.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
