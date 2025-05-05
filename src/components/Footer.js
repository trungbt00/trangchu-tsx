import React, { useEffect } from "react";
import "../styles/footer.css";
import logo from "../assets/images/FINALE GTSC-05.png";

export default function Footer() {
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    faders.forEach((el) => observer.observe(el));
    return () => faders.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <footer className="footer fade-in-on-scroll">
      <div className="container footer-container">
        <div className="footer-top-logo">
          <img src={logo} alt="GTSC Logo" className="footer-logo-large" />
        </div>

        <div className="footer-col">
          <p>
            <strong>Trụ sở chính:</strong>
            <br />
            103-105 Nguyễn Tuân, Phường Thanh Xuân Trung, Quận Thanh Xuân, Hà
            Nội.
          </p>
          <p>
            <strong>VP đại diện miền Trung:</strong>
            <br />
            107 Lê Lợi, Quận Hải Châu, Tp. Đà Nẵng.
          </p>
          <p>
            <strong>VP đại diện miền Nam:</strong>
            <br />
            385C Nguyễn Trãi, Quận 1, Tp. Hồ Chí Minh.
          </p>
        </div>

        <div className="footer-col">
          <h4>Kết nối nhanh</h4>
          <ul>
            <li>
              <a href="#">Trang chủ</a>
            </li>
            <li>
              <a href="#">Giới thiệu</a>
            </li>
            <li>
              <a href="#">Dịch vụ</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.905314310064!2d105.80394199999999!3d20.996432300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acbdbdb33f17%3A0x2000f051871cff40!2zMTAzIMSQLiBOZ3V54buFbiBUdcOibiwgVGhhbmggWHXDom4gVHJ1bmcsIFEuIFRoYW5oIFRydW5nLCBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1744274579246!5m2!1svi!2s"
            width="348"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="GTSC Location"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
