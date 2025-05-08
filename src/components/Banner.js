import image from "../assets/images/MAN08824.jpg";
import "../styles/style.css";
export default function Banner() {
  return (
    <section className="banner-wrapper">
      <img src={image} alt="Banner" className="banner-img" />
    </section>
  );
}
