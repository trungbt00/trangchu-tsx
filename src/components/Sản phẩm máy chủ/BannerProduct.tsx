import { Image, Typography, Row, Col } from "antd";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import bannerImage from "../../assets/Sản phẩm/Máy chủ/banner.jpg";
import "../../styles/style.css";
import "../../styles/Sản phẩm máy chủ/banner.css";

const { Title } = Typography;

interface Product {
  slug: string;
  name: string;
  [key: string]: any;
}

export default function Banner() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    fetch("/data/may-chu.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.data.find((p: Product) => p.slug === id);
        setProduct(found || null);
      })
      .catch((err) => console.error("Lỗi tải sản phẩm:", err));
  }, [id]);

  if (!product) {
    return <div>{t("loading")}</div>;
  }

  return (
    <section className="container-banner">
      <Image src={bannerImage} alt="Banner" preview={false} height={200} />
      <Title level={2} className="product-center">
        {product.name}
      </Title>
    </section>
  );
}
