import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/FINALE GTSC-05.png";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <ul className="nav">
          <li className="logo-item">
            <Link to="/">
              <img src={logo} alt="GTSC logo" className="logo" />
            </Link>
          </li>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/gioi-thieu">Giới thiệu</Link>
          </li>
          <li>
            <Link to="/san-pham">Sản phẩm</Link>
          </li>
          <li>
            <Link to="/tin-tuc">Tin tức</Link>
          </li>
          <li>
            <Link to="/tuyen-dung">Tuyển dụng</Link>
          </li>
          <li>
            <Link to="/lien-he">Liên hệ</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
