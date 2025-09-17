import Hero from "../Hero/Hero";
import Discover from "../Discover/Discover.jsx";
import styles from './Overview.module.css';
import Prefooter from "../Prefooter/Prefooter.jsx";

import image from '../assets/img/background.avif';

import ImageCarousel from "../components/Image.jsx";

function Overview() {
    return (
        <>
            <Hero
                title="Rest, Relax, Reconnect"
                subtitle="Hotel Rose Garden"
                image={image}
            />

            <main>
                <div className={styles.contentOne}>
                    <section className={styles.content}>
                        <div className={styles.firstCol}>
                            <h3 className={styles.heading}>A sanctuary of warmth rooted in tradition, nurtured by flavors</h3>
                        </div>

                        <div className={styles.columnWrap}>
                            <div className={styles.secondCol}>
                                <p className={styles.text}>Hotel Rose Garden rises quietly in the heart of the city, a haven where comfort and Indian heritage intertwine. Its corridors and spaces invite exploration, while curated experiences lead guests through the richness of local culture, cuisine, and craftsmanship.</p>
                            </div>

                            <div className={styles.thirdCol}>
                                <p className={styles.text}>Amidst this harmony, attentive hosts guide every visit with care, sharing stories, flavors, and traditions that connect guests to the spirit of India. It is a place where every moment blossoms naturally, leaving a lasting warmth long after departure.</p>
                            </div>
                        </div>

                        <div className={styles.btnDiscover}>
                            <button className={styles.btn}>Discover Your Retreat</button>
                        </div>
                    </section>
                </div>

                <div className={styles.contentTwo}>
                    <div className={styles.center}>Video Goes Here</div>
                </div>

                <div className={styles.columnThree}>
                    <div className={styles.content}>
                        <div className={styles.firstCol}>
                            <h3 className={styles.heading}>A journey through taste and tradition</h3>
                        </div>
                        
                        <div className={styles.secondCol}>
                            <p className={styles.text}>Every meal at Hotel Rose Garden is an invitation to explore the rich flavors of India. From aromatic spices to carefully crafted dishes, each bite tells a story. Alongside these culinary delights, guests can discover traditions and craftsmanship woven into every detail, making each moment an experience to savor.</p>
                        </div>

                        <div className={styles.btnMenu}>
                            <button className={styles.btn}>OUR FLAVORS AWAIT</button>
                        </div>
                    </div>
                </div>

                <div className={styles.imageGallery}>
                    <ImageCarousel />
                </div>

                <div className={styles.discoverMore}>
                    < Discover />
                </div>

                <div className={styles.prefooter}>
                    < Prefooter />
                </div>
            </main>
        </>
    );
}

export default Overview;