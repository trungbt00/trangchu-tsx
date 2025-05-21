import image from "../../assets/Giới thiệu/banner.jpg";
import "../../styles/style.css";
import "../../styles/Giới thiệu/banner.css";
import { useTranslation } from "react-i18next";
export default function Banner() {
  const { i18n } = useTranslation();
  return (
    <section className="container-banner">
      <img src={image} alt="Banner" className="banner-img" />
      <div className="center">{i18n.t("tech")}</div>
    </section>
  );
}
