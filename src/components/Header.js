import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../styles/header.css";
import logo from "../assets/images/FINALE GTSC-05.png";
import "../styles/style.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n } = useTranslation();
  const topBarRef = useRef(null);
  const navRef = useRef(null);

  const changeLanguage = () => {
    const newLang = i18n.language === "vi" ? "en" : "vi";
    i18n.changeLanguage(newLang);
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (menuOpen && topBarRef.current && navRef.current && isMobile) {
      const height = topBarRef.current.offsetHeight;
      navRef.current.style.marginTop = `${height}px`;
    } else if (navRef.current) {
      navRef.current.style.marginTop = "";
      navRef.current.style.display = "";
    }
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="nav-container">
        <div className="top-bar" ref={topBarRef}>
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
          <div className="logo-center" onClick={scrollToTop}>
            <img src={logo} alt="GTSC logo" className="logo" />
          </div>
          <div>
            <button onClick={changeLanguage} className="button lang-btn">
              🌐 {i18n.language.toUpperCase()}
            </button>
          </div>
        </div>

        <ul className={`nav ${menuOpen ? "active" : ""}`} ref={navRef}>
          <li className="logo-item-desktop">
            <div onClick={scrollToTop}>
              <img src={logo} alt="GTSC logo" className="logo" />
            </div>
          </li>
          <li>
            <a href="/">{i18n.t("home")}</a>
          </li>
          <li>
            <a href="/">{i18n.t("about")}</a>
          </li>
          <li>
            <a href="/">{i18n.t("products")}</a>
          </li>
          <li>
            <a href="/">{i18n.t("news")}</a>
          </li>
          <li>
            <a href="/">{i18n.t("careers")}</a>
          </li>
          <li>
            <a href="/">{i18n.t("contact")}</a>
          </li>
          <li className="lang-btn-wrapper">
            <button onClick={changeLanguage} className="button lang-btn">
              🌐 {i18n.language.toUpperCase()}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
