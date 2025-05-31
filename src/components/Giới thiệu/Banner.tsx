import { Image, Typography } from "antd";
import { useTranslation } from "react-i18next";
import bannerImage from "../../assets/Giới thiệu/banner.jpg";
import "../../styles/style.css";
import "../../styles/Giới thiệu/banner.css";

const { Title } = Typography;

const Banner: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <section className="container-banner-page">
      <Image
        src={bannerImage}
        alt="Banner"
        preview={false}
        width="100%"
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Title level={2} className="center">
        {i18n.t("about") as string}
      </Title>
    </section>
  );
};

export default Banner;
