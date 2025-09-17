import React, { useEffect, useState } from "react";
import Slider from "../Slider/Slider";
import styles from "./Cards.module.css";
import img1 from "../assets/img/image-gallery-1.avif";
import img2 from "../assets/img/image-gallery-2.avif";
import img3 from "../assets/img/image-gallery-3.avif";
import img4 from "../assets/img/image-gallery-4.avif";
import { Link } from "react-router-dom"; // ✅ Use Link

function CardCarousel() {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;

      if (width < 767) setSlidesPerView(1); // Mobile
      else if (width < 1024) setSlidesPerView(2); // Tablet
      else if (width < 1200) setSlidesPerView(2); // Small Laptop
      else if (width < 1380) setSlidesPerView(3); // Large Laptop
      else setSlidesPerView(4); // Desktop
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const cards = [
    { 
      img: img1, 
      title: "Accommodations", 
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas unde dolorum iure ad. Cum, illo minus? Quae facilis ipsam aliquid eum iusto voluptatum quasi.",
      link: "/accommodations" // ✅ Add route here
    },
    { 
      img: img2, 
      title: "Dining", 
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas unde dolorum iure ad. Cum, illo minus? Quae facilis ipsam aliquid eum iusto voluptatum quasi.",
      link: "/menu" // ✅ Add route
    },
    { 
      img: img3, 
      title: "Amenities",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas unde dolorum iure ad. Cum, illo minus? Quae facilis ipsam aliquid eum iusto voluptatum quasi.",
      link: "/amenities" // ✅ Add route
    },
    { 
      img: img4, 
      title: "Our Menu", 
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptas unde dolorum iure ad. Cum, illo minus? Quae facilis ipsam aliquid eum iusto voluptatum quasi.",
      link: "/menu" // ✅ Add route
    },
  ];

  return (
    <Slider 
      slidesPerView={slidesPerView}
      items={cards}
      renderItem={(card) => (
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={card.img} alt={card.title} />
            </div>

            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.text}>{card.text}</p>

            {/* ✅ Use Link for navigation */}
            <Link to={card.link}>
              <button className={styles.btn}>Explore More</button>
            </Link>
          </div>
        </div>
      )}
    />
  );
}

export default CardCarousel;
