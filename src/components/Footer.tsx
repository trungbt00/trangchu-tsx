import React, { useEffect } from "react";
import { Row, Col, Typography } from "antd";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/FINALE GTSC-05.png";
import "../styles/footer.css";
import "../styles/style.css";

const { Title, Paragraph, Link: AntLink } = Typography;

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
            <Paragraph strong style={{ marginBottom: 0 }}>
              {i18n.t("head-office") as string}
            </Paragraph>
            <Paragraph>{i18n.t("Head-address") as string}</Paragraph>

            <Paragraph strong style={{ marginBottom: 0 }}>
              {i18n.t("Central-office") as string}
            </Paragraph>
            <Paragraph>{i18n.t("Central-address") as string}</Paragraph>

            <Paragraph strong style={{ marginBottom: 0 }}>
              {i18n.t("South-office") as string}
            </Paragraph>
            <Paragraph>{i18n.t("South-address") as string}</Paragraph>
          </Col>

          <Col xs={24} sm={12} md={5}>
            <br></br>
            <Title level={4} style={{ marginBottom: 0 }}>
              {i18n.t("contact") as string}
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              Hotline: 0243 993 1919
            </Paragraph>
            <Paragraph style={{ marginBottom: 0 }}>
              Mail: contact@gtsc.vn
            </Paragraph>
            <br></br>
            <Title level={4} style={{ marginBottom: 0 }}>
              {i18n.t("connect") as string}
            </Title>
            <Paragraph style={{ marginBottom: 0 }}>
              <AntLink href="/">{i18n.t("home") as string}</AntLink>
            </Paragraph>
            <Paragraph style={{ marginBottom: 0 }}>
              <AntLink href="/gioi-thieu">{i18n.t("about") as string}</AntLink>
            </Paragraph>
            <Paragraph style={{ marginBottom: 0 }}>
              <AntLink href="/">{i18n.t("contact") as string}</AntLink>
            </Paragraph>
          </Col>

          <Col xs={24} sm={24} md={11}>
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
