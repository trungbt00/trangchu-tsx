import React, { useEffect, useState } from "react";
import "../styles/header.css";
import logo from "../assets/images/FINALE GTSC-05.png";

export default function Header() {
  const [isSticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`header ${isSticky ? "sticky-header" : ""}`}>
      <div className="container">
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </div>
        <ul className={`nav ${menuOpen ? "active" : ""}`} id="nav-menu">
          <li className="logo-item">
            <a href="#" className="active" onClick={scrollToTop}>
              <img src={logo} alt="GTSC logo" className="logo" />
            </a>
          </li>
          <li>
            <a href="/">Trang chủ</a>
          </li>
          <li>
            <a href="/gioi-thieu">Giới thiệu</a>
          </li>
          <li>
            <a href="/san-pham">Sản phẩm</a>
          </li>
          <li>
            <a href="/tin-tuc">Tin tức</a>
          </li>
          <li>
            <a href="/tuyen-dung">Tuyển dụng</a>
          </li>
          <li>
            <a href="/lien-he">Liên hệ</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
