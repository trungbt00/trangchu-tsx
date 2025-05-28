import image from "../../assets/Giới thiệu/banner.jpg";
import "../../styles/style.css";
import "../../styles/Giới thiệu/banner.css";
import { useTranslation } from "react-i18next";
const Banner: React.FC = () => {
  const { i18n } = useTranslation();
  return (
    <section className="container-banner">
      <img src={image} alt="Banner" className="banner-img" />
      <div className="center">{i18n.t("internal") as string}</div>
    </section>
  );
};

export default Banner;
