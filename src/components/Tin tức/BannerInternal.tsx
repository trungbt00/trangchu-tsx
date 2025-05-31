import { Image, Typography } from "antd";
import { useTranslation } from "react-i18next";
import bannerImage from "../../assets/Giới thiệu/banner.jpg";
import "../../styles/style.css";
import "../../styles/Giới thiệu/banner.css";

const { Title } = Typography;

const Banner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="container-banner">
      <Image src={bannerImage} alt="Banner" preview={false} height={200} />
      <Title level={2} className="center">
        {t("internal") as string}
      </Title>
    </section>
  );
};

export default Banner;
