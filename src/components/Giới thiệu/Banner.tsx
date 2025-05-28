import "../../styles/style.css";
import "../../styles/Giới thiệu/banner.css";
import { useTranslation } from "react-i18next";
import image from "../../assets/Giới thiệu/banner.jpg";
const Banner: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <section className="container-banner">
      <img src={image} alt="Banner" className="banner-img" />
      <h2 className="center">{i18n.t("about") as string}</h2>
    </section>
  );
};

export default Banner;
