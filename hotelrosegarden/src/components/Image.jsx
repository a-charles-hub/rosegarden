import React, { useEffect, useState } from "react";
import Slider from "../Slider/Slider";
import img1 from "../assets/img/image-gallery-1.avif";
import img2 from "../assets/img/image-gallery-2.avif";
import img3 from "../assets/img/image-gallery-3.avif";
import img4 from "../assets/img/image-gallery-4.avif";
import styles from './Image.module.css';

export default function ImageCarousel() {
  const images = [img1, img2, img3, img4];

  const [slidesPerView, setSlidesPerView] = useState(3);
  
  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
  
      if(width < 767) setSlidesPerView(1); // Mobile
      else if (width < 1024) setSlidesPerView(2); // Tablet
      else setSlidesPerView(3); // Desktop
    };
  
    updateSlides();
    window.addEventListener("resize", updateSlides);
  
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  return (
    <Slider
      items={images}
      slidesPerView={slidesPerView}
      renderItem={(img) => (
        <img className={styles.image}
          src={img}
          alt="Gallery"
        />
      )}
    />
  );
}
