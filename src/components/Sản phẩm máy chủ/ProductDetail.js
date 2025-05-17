import { React } from "react";
import "../../styles/style.css";
import sp from "../../assets/Sản phẩm/Máy chủ/sp-mod.png";
import "../../styles/Sản phẩm máy chủ/product_info.css";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === id);
        setProduct(found);
      });
  }, [id]);

  if (!product) return <div>{i18n.t("loading")}</div>;

  return (
    <div className="container">
      <div className="product-wrapper">
        <div className="aaa">
          <div className="section-item">
            <img className="sp-mod" src={sp} alt="sp-mod" loading="lazy" />
            <img
              className="section-item-img"
              src={product.img}
              alt={product.title}
            />
            <div className="pt-3 fw-bold">{product.title}</div>
          </div>
        </div>
      </div>
      <div className="info-box1">
        <h5 className="fw-bold">{i18n.t("product-info")}</h5>
        <hr></hr>
        <div dangerouslySetInnerHTML={{ __html: product.info }} />
      </div>
      <div className="info-box2">
        <h5 className="fw-bold">{i18n.t("product-features")}</h5>
        {/* <h2 className="fw-bold">Key Features</h2> */}
        <hr></hr>
        <div dangerouslySetInnerHTML={{ __html: product.features }} />
      </div>
    </div>
  );
}
