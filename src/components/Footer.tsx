import React, { useEffect } from "react";
import { Row, Col } from "antd";
import "../styles/footer.css";
import logo from "../assets/images/FINALE GTSC-05.png";
import { useTranslation } from "react-i18next";
import "../styles/style.css";

const Footer: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const faders = document.querySelectorAll<HTMLElement>(".fade-in-on-scroll");
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

    faders.forEach((el: HTMLElement) => observer.observe(el));
    return () => {
      faders.forEach((el: HTMLElement) => observer.unobserve(el));
    };
  }, []);

  return (
    <footer className="footer fade-in-on-scroll">
      <div className="container">
        <Row gutter={[32, 24]} align="top">
          <Col xs={24} sm={12} md={8}>
            <img
              src={logo}
              alt="GTSC Logo"
              style={{ maxWidth: 150, marginBottom: 16 }}
            />
            <p>
              <strong>{i18n.t("head-office")}</strong>
              <br />
              {i18n.t("Head-address")}
            </p>
            <br></br>
            <p>
              <strong>{i18n.t("Central-office")}</strong>
              <br />
              {i18n.t("Central-address")}
            </p>
            <br></br>
            <p>
              <strong>{i18n.t("South-office")}</strong>
              <br />
              {i18n.t("South-address")}
            </p>
          </Col>

          <Col xs={24} sm={12} md={5}>
            <br></br>
            <h4>{i18n.t("contact")}</h4>
            <p>Hotline: 0243 993 1919</p>
            <p>Mail: contact@gtsc.vn</p>
            <br></br>
            <h4>{i18n.t("connect")}</h4>
            <p>
              <a href="/">{i18n.t("home")}</a>
            </p>
            <p>
              <a href="/gioi-thieu">{i18n.t("about")}</a>
            </p>
            <p>
              <a href="/">{i18n.t("contact")}</a>
            </p>
          </Col>

          <Col xs={24} sm={24} md={10}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.905314310064!2d105.80394199999999!3d20.996432300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acbdbdb33f17%3A0x2000f051871cff40!2zMTAzIMSQLiBOZ3V54buFbiBUdcOibiwgVGhhbmggWHXDom4gVHJ1bmcsIFEuIFRoYW5oIFRydW5nLCBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1744274579246!5m2!1svi!2s"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GTSC Location"
            ></iframe>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
