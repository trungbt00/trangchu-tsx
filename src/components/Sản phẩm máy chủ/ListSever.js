import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/style.css";
import sp from "../../assets/Sản phẩm/Máy chủ/sp-mod.png";
import "../../styles/Sản phẩm máy chủ/product_info.css";

export default function ListSever() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then(setProducts)
      .catch((err) => console.error("Lỗi tải sản phẩm:", err));
  }, []);

  return (
    <section className="container">
      <div className="grid-container">
        {products.map((product) => (
          <Link
            to={`/san-pham/${product.id}`}
            key={product.id}
            style={{ textDecoration: "none" }}
            className="aaa"
          >
            <div className="section-item">
              <img className="sp-mod" src={sp} alt="sp-mod" loading="lazy" />
              <img
                className="section-item-img"
                src={product.img}
                alt={product.title}
              />
              <div className="pt-3 fw-bold">{product.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
