import React from "react";
import systemIntegrationImg from "../assets/images/TÍCH HỢP HỆ THỐNG.jpg";
import cloudComputingImg from "../assets/images/TRUNG TÂM DỮ LIỆU VÀ ĐIỆN TOÁN ĐÁM MÂY.jpg";
import informationSecurityImg from "../assets/images/ATTT.jpg";
import icon1 from "../assets/images/Vector/Vector 1.png";
import icon2 from "../assets/images/Vector/Vector 2.png";
import icon3 from "../assets/images/Vector/Vector 3.png";
import "../styles/Lĩnh vực hoạt động.css";

export default function Fields() {
  return (
    <section className="fields">
      <div className="container">
        <h1 className="heading">LĨNH VỰC HOẠT ĐỘNG</h1>
        <div className="field-grid">
          <div className="field-item">
            <img
              src={systemIntegrationImg}
              alt="Tích hợp hệ thống"
              loading="lazy"
            />
            <div className="field-caption">
              <img src={icon1} alt="Icon 1" loading="lazy" />
              <p>TÍCH HỢP HỆ THỐNG</p>
            </div>
          </div>

          <div className="field-item">
            <img
              src={cloudComputingImg}
              alt="Trung tâm dữ liệu và điện toán đám mây"
              loading="lazy"
            />
            <div className="field-caption">
              <img src={icon2} alt="Icon 2" loading="lazy" />
              <p>
                TRUNG TÂM DỮ LIỆU VÀ
                <br />
                ĐIỆN TOÁN ĐÁM MÂY
              </p>
            </div>
          </div>

          <div className="field-item">
            <img
              src={informationSecurityImg}
              alt="An toàn thông tin"
              loading="lazy"
            />
            <div className="field-caption">
              <img src={icon3} alt="Icon 3" loading="lazy" />
              <p>AN TOÀN THÔNG TIN</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
