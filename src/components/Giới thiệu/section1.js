import "../../styles/style.css";
import img1 from "../../assets/Giới thiệu/t1.png";
import img2 from "../../assets/Giới thiệu/t2.png";
import img3 from "../../assets/Giới thiệu/t3.png";
import img4 from "../../assets/Giới thiệu/t4.png";
import "../../styles/Giới thiệu/section1.css";
import { useTranslation } from "react-i18next";

export default function Section1() {
  const { i18n } = useTranslation();

  return (
    <section className="container">
      <div className="blue-box">
        <h2 className="text-h2">{i18n.t("why-choose-us")}</h2>
        <div className="intro-grid">
          <div className="intro-item">
            <img src={img1} alt="KINH NGHIỆM DÀY DẠN" loading="lazy" />
            <div className="pt-3 fw-bold">{i18n.t("R1")}</div>
          </div>
          <div className="intro-item">
            <img src={img2} alt="GIẢI PHÁP TOÀN DIỆN" loading="lazy" />
            <div className="pt-3 fw-bold">{i18n.t("R2")}</div>
          </div>
          <div className="intro-item">
            <img src={img3} alt="DỊCH VỤ CHẤT LƯỢNG" loading="lazy" />
            <div className="pt-3 fw-bold">{i18n.t("R3")}</div>
          </div>
          <div className="intro-item">
            <img src={img4} alt="UY TÍN VÀ THƯƠNG HIỆU" loading="lazy" />
            <div className="pt-3 fw-bold">{i18n.t("R4")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
