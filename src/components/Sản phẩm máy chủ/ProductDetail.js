import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../styles/style.css";
import sp from "../../assets/Sản phẩm/Máy chủ/sp-mod.png";
import "../../styles/Sản phẩm máy chủ/product_info.css";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    fetch("/data/may-chu.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.data.find((p) => p.slug === id);
        setProduct(found || null);
      })
      .catch((err) => console.error("Lỗi tải sản phẩm:", err));
  }, [id]);

  if (!product) return <div>{i18n.t("loading")}</div>;

  return (
    <div className="container">
      <div className="product-wrapper">
        <div className="aaaa">
          <div className="section-item">
            <img className="sp-mod" src={sp} alt="sp-mod" loading="lazy" />
            <img
              className="section-item-img"
              src={product.thumbnailImage || ""}
              alt={product.name}
            />
            <div className="pt-3 fw-bold">{product.name}</div>
          </div>
        </div>
      </div>
      <div className="info-box1">
        <h5 className="fw-bold">{i18n.t("product-info")}</h5>
        <hr />
        <div
          dangerouslySetInnerHTML={{ __html: product.fullDescriptionInfo }}
        />
      </div>
      <div className="info-box2">
        <h5 className="fw-bold">{i18n.t("product-features")}</h5>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: product.contentInfo }} />
      </div>
    </div>
  );
}
