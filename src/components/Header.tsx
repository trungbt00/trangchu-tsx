import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button, Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "../styles/header.css";
import logo from "../assets/images/FINALE GTSC-05.png";
import "../styles/style.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const topBarRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLUListElement | null>(null);
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === "vi" ? "en" : "vi";
    i18n.changeLanguage(newLang);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (menuOpen && topBarRef.current && navRef.current && isMobile) {
      const height = topBarRef.current.offsetHeight;
      navRef.current.style.marginTop = `${height}px`;
      // Đảm bảo display được quản lý qua class 'active' thay vì style trực tiếp
      // navRef.current.style.display = "flex"; // Có thể bỏ dòng này nếu CSS đã đủ
    } else if (navRef.current) {
      navRef.current.style.marginTop = "";
      // Đảm bảo display được quản lý qua class 'active' thay vì style trực tiếp
      // navRef.current.style.display = ""; // Có thể bỏ dòng này nếu CSS đã đủ
    }
  }, [menuOpen]);

  // Thêm hàm để đóng menu mobile khi chọn một mục
  const handleMenuItemClick = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(false); // Đóng menu mobile sau khi chọn
    }
  };

  const productMenu = (
    <Menu
      mode="vertical"
      items={[
        {
          key: "1",
          label: (
            <a href="/may-chu" onClick={handleMenuItemClick}>
              {i18n.t("server")}
            </a>
          ),
        },
        {
          type: "divider",
        },
        {
          key: "2",
          label: (
            <a href="/" onClick={handleMenuItemClick}>
              Camera
            </a>
          ),
        },
      ]}
    />
  );

  const newsMenu = (
    <Menu
      mode="vertical"
      items={[
        {
          key: "1",
          label: (
            <a href="/tin-tuc/noi-bo" onClick={handleMenuItemClick}>
              {i18n.t("internal")}
            </a>
          ),
        },
        {
          type: "divider",
        },
        {
          key: "2",
          label: (
            <a href="/tin-tuc/cong-nghe" onClick={handleMenuItemClick}>
              {i18n.t("tech")}
            </a>
          ),
        },
      ]}
    />
  );

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
            <Button onClick={changeLanguage} className="button lang-btn">
              🌐 {i18n.language.toUpperCase()}
            </Button>
          </div>
        </div>

        <ul className={`nav ${menuOpen ? "active" : ""}`} ref={navRef}>
          <li className="logo-item-desktop" onClick={scrollToTop}>
            <img src={logo} alt="GTSC logo" className="logo" />
          </li>
          <li>
            <a href="/" onClick={handleMenuItemClick}>
              {i18n.t("home")}
            </a>
          </li>
          <li>
            <a href="/gioi-thieu" onClick={handleMenuItemClick}>
              {i18n.t("about")}
            </a>
          </li>
          <li>
            <Dropdown
              overlay={productMenu}
              getPopupContainer={() => navRef.current || document.body}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  {i18n.t("products")}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </li>
          <li>
            <Dropdown
              overlay={newsMenu}
              getPopupContainer={() => navRef.current || document.body}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  {i18n.t("news")}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </li>
          <li>
            <a href="/tuyen-dung" onClick={handleMenuItemClick}>
              {i18n.t("careers")}
            </a>
          </li>
          <li>
            <a href="/lien-he" onClick={handleMenuItemClick}>
              {i18n.t("contact")}
            </a>
          </li>
          <li className="lang-btn-wrapper">
            <Button onClick={changeLanguage} className="button lang-btn">
              🌐 {i18n.language.toUpperCase()}
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
