import "../../styles/style.css";
import "../../styles/Giới thiệu/banner.css";
import { useTranslation } from "react-i18next";
export default function Banner() {
  const { i18n } = useTranslation();
  return (
    <section className="container-banner">
      <div className="jobs-container">
        <h2 className="center">{i18n.t("about")}</h2>
      </div>
    </section>
  );
}
