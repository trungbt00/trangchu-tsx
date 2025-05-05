import image from "../assets/images/MAN08824.jpg";
export default function Banner() {
  return (
    <section className="banner-wrapper">
      <img
        src={image}
        alt="Banner"
        className="banner-img"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </section>
  );
}
