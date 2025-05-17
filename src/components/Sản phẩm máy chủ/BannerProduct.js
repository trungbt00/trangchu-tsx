import image from "../../assets/Sản phẩm/Máy chủ/banner.jpg";
import "../../styles/style.css";
import "../../styles/Sản phẩm máy chủ/banner.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Banner() {
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
    <section className="container-banner">
      <img src={image} alt="Banner" className="banner-img" />
      <div className="product-center">{product.title}</div>
    </section>
  );
}
