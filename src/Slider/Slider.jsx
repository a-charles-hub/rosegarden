// src/components/Carousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Slider.module.css";

import { Navigation, Pagination } from "swiper/modules";

function Slider({
  items = [], // Store data as an array
  renderItem,
  slidesPerView = 3, // Show 3 slides
  spaceBetween = 5, // Gap between slides
  loop = true, // Always loops
  navigation = true, 
  pagination = true,
}) {

  return (
    <Swiper className={styles.swiperContainer}
      modules={[Navigation, Pagination]}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      loop={loop}
      navigation={navigation}
      pagination={pagination ? { clickable: true } : false}
    >
      {items.map((item, i) => (
        <SwiperSlide key={i}>{renderItem(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
