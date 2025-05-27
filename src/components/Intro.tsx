import React, { useEffect, useRef, useState } from "react";
import "../styles/intro.css";
import { useTranslation } from "react-i18next";
import "../styles/style.css";

const Intro: React.FC = () => {
  const introRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { i18n } = useTranslation();

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
    <section ref={introRef} className={`intro ${isVisible ? "visible" : ""}`}>
      <div className="intro-container">
        <h1>{i18n.t("company-name")}</h1>
        <p>{i18n.t("intro")}</p>
      </div>
    </section>
  );
};

export default Intro;
