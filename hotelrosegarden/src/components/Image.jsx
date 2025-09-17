import Slider from "../Slider/Slider";
import img1 from "../assets/img/image-gallery-1.avif";
import img2 from "../assets/img/image-gallery-2.avif";
import img3 from "../assets/img/image-gallery-3.avif";
import img4 from "../assets/img/image-gallery-4.avif";

export default function ImageCarousel() {
  const images = [img1, img2, img3, img4];

  return (
    <Slider
      items={images}
      slidesPerView={3}
      renderItem={(img) => (
        <img
          src={img}
          alt="Gallery"
          style={{
            width: "100%",
            height: "550px",
            objectFit: "cover",
          }}
        />
      )}
    />
  );
}
