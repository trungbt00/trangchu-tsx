import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Row, Col, Card, Typography, Image, Spin } from "antd";
import sp from "../../assets/Sản phẩm/Máy chủ/sp-mod.png";
import "../../styles/style.css";
import "../../styles/Sản phẩm máy chủ/product_info.css";

const { Title } = Typography;

interface Product {
  slug: string;
  name: string;
  thumbnailImage?: string;
  fullDescriptionInfo?: string;
  contentInfo?: string;
  [key: string]: any;
}

export default function ProductDetail() {
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

  if (!product) return <Spin tip={t("loading")} style={{ marginTop: 48 }} />;

  return (
    <div className="container">
      <Row justify="center" gutter={[24, 24]}>
        <Col xs={24} md={12} lg={12}>
          <Card
            hoverable
            bordered
            style={{
              borderRadius: 16,
              borderColor: "#c92135",
              border: "2px solid #c92135",
              overflow: "hidden",
            }}
            bodyStyle={{
              padding: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ marginTop: 16, marginBottom: 8 }}>
              <img
                className="sp-mod1"
                src={sp}
                alt="sp-mod"
                style={{ height: 26 }}
              />
            </div>
            <Image
              src={product.thumbnailImage || ""}
              alt={product.name}
              style={{
                maxWidth: "100%",
                height: 220,
                objectFit: "contain",
                marginBottom: 16,
              }}
            />
            <Title
              level={5}
              style={{
                color: "#2d8fcc",
                minHeight: 48,
                margin: 0,
                textAlign: "center",
              }}
            >
              {product.name}
            </Title>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: 32 }}>
        <Col span={24}>
          <Card
            title={<Title level={5}>{t("product-info")}</Title>}
            style={{ border: "2px solid #c92135", borderRadius: 12 }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: product.fullDescriptionInfo || "",
              }}
            />
          </Card>
        </Col>

        <Col span={24}>
          <Card
            title={<Title level={5}>{t("product-features")}</Title>}
            style={{ border: "2px solid #0b5eb3", borderRadius: 12 }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: product.contentInfo || "",
              }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
