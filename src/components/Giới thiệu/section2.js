import "../../styles/style.css";
import img1 from "../../assets/Giới thiệu/tn.png";
import img2 from "../../assets/Giới thiệu/sm.png";
import "../../styles/Giới thiệu/section2.css";
import { useTranslation } from "react-i18next";

export default function Section2() {
  const { i18n } = useTranslation();

  return (
    <section className="container">
      <div className="section1-grid">
        <div className="section-item2">
          <div className="red-box">
            <h2 className="text-h2">{i18n.t("vision")}</h2>
          </div>
          <img src={img1} alt="Tích hợp hệ thống" loading="lazy" />
          <div className="text-p">{i18n.t("vision-content")}</div>
        </div>
        <div className="section-item2">
          <div className="red-box">
            <h2 className="text-h2">{i18n.t("mission")}</h2>
          </div>
          <img src={img2} alt="Tích hợp hệ thống" loading="lazy" />
          <div className="text-p">{i18n.t("mission_content")}</div>
        </div>
      </div>
    </section>
  );
}
