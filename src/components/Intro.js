import React, { useEffect, useRef, useState } from "react";
import "../styles/intro.css";

export default function Intro() {
  const introRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={introRef}
      className={`intro fade-in-on-scroll ${isVisible ? "visible" : ""}`}
    >
      <div className="intro-container">
        <h1>CÔNG TY CỔ PHẦN THƯƠNG MẠI VÀ DỊCH VỤ CÔNG NGHỆ GTSC VIỆT NAM</h1>
        <p>
          Là một đơn vị thành viên thuộc Tổng Công ty Công nghệ - Viễn thông
          Toàn cầu. Với kinh nghiệm nhiều năm trong lĩnh vực công nghệ thông
          tin, công ty GTSC đã khẳng định vị thế là một trong những nhà cung cấp
          giải pháp công nghệ thông tin hàng đầu tại Việt Nam.
        </p>
      </div>
    </section>
  );
}
