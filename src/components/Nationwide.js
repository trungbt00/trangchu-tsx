import React, { useEffect, useRef } from "react";
import "../styles/Phủ sóng toàn quốc.css";
import video from "../assets/images/0412.mp4";
export default function Nationwide() {
  const textRef = useRef(null);
  const videoRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <section className="nationwide">
      <div className="container grid">
        <div className="text" ref={textRef}>
          <h1 className="heading">PHỦ SÓNG TOÀN QUỐC</h1>
          <p>
            Công ty có trụ sở ở Hà Nội, văn phòng đại diện ở Đà Nẵng và Tp. Hồ
            Chí Minh, với mạng lưới rộng khắp, chúng tôi tự hào mang sản phẩm và
            dịch vụ của mình đến mọi tỉnh thành trên cả nước. Dù bạn ở thành phố
            lớn hay khu vực xa xôi, chúng tôi luôn sẵn sàng phục vụ nhanh chóng
            và chuyên nghiệp. Nhờ hệ thống chi nhánh, đối tác và đội ngũ hỗ trợ
            mạnh mẽ, chúng tôi đảm bảo mang đến cho khách hàng trải nghiệm thuận
            tiện, chất lượng đồng đều ở mọi nơi. Sự hiện diện trên toàn quốc
            không chỉ giúp chúng tôi tiếp cận khách hàng dễ dàng hơn mà còn
            khẳng định cam kết phát triển bền vững, góp phần nâng cao chất lượng
            cuộc sống cho cộng đồng.
          </p>
        </div>
        <div className="image" ref={videoRef}>
          <video className="nationwide-video" autoPlay muted loop playsInline>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
