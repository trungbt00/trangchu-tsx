import React, { useEffect } from "react";
import "../styles/footer.css";
import logo from "../assets/images/FINALE GTSC-05.png";
import { useTranslation } from "react-i18next";
import "../styles/style.css";

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

  const { i18n } = useTranslation();

  return (
    <footer className="footer fade-in-on-scroll">
      <div className="container footer-container">
        <div className="footer-top-logo">
          <img src={logo} alt="GTSC Logo" className="footer-logo-large" />
        </div>

        <div className="footer-col">
          <p>
            <strong>{i18n.t("head-office")}:</strong>
            <br />
            {i18n.t("Head-address")}
          </p>
          <p>
            <strong>{i18n.t("Central-office")}:</strong>
            <br />
            {i18n.t("Central-address")}
          </p>
          <p>
            <strong>{i18n.t("South-office")}:</strong>
            <br />
            {i18n.t("South-address")}
          </p>
        </div>

        <div className="footer-col">
          <h4 style={{ "margin-bottom": "10px" }}>{i18n.t("contact")}</h4>
          <ul>
            <li>
              <p style={{ "margin-bottom": "8px" }}>Hotline: 0243 993 1919</p>
            </li>
            <li>
              <p style={{ "margin-bottom": "8px" }}>Mail: contact@gtsc.vn</p>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 style={{ "margin-bottom": "10px" }}>{i18n.t("connect")}</h4>
          <ul>
            <li>
              <a style={{ "margin-bottom": "8px" }} href="/">
                {i18n.t("home")}
              </a>
            </li>
            <li>
              <a style={{ "margin-bottom": "8px" }} href="/gioi-thieu">
                {i18n.t("about")}
              </a>
            </li>
            <li>
              <a style={{ "margin-bottom": "8px" }} href="/">
                {i18n.t("contact")}
              </a>
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
