import { useEffect, useState } from "react";
import Slider from "../Slider/Slider";
import styles from "./Instagram.module.css";
import img1 from "../assets/img/image-gallery-1.avif";
import img2 from "../assets/img/image-gallery-2.avif";
import img3 from "../assets/img/image-gallery-3.avif";
import img4 from "../assets/img/image-gallery-4.avif";


function Instagram() {
    const images = [img1, img2, img3, img4];
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const updateSlider= () => {
            // Get current window size
            const width = window.innerWidth;

            if(width < 500) setSlidesPerView(2)
            else if(width < 767) setSlidesPerView(3);
            else if(width < 1024) setSlidesPerView(3)
            else setSlidesPerView(4);
        }

        updateSlider();

        // check whether screen is resized, if so, updateSlider
        window.addEventListener("resize", updateSlider);
    }, []);

    return (
        <section className={styles.instagram}> 
            <h3 className={styles.heading}>Follow us on instagram</h3>

            <div className={styles.instagramGallery}>
                <Slider 
                items={images}
                slidesPerView={slidesPerView}
                renderItem={(img) => (
                    <img className={styles.image}
                        src={img} />
                )}
            />
            </div>
            
        </section>
    );
}

export default Instagram;