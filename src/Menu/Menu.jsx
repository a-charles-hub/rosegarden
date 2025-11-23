import Hero from "../Hero/Hero";
import MenuItems from "./MenuItems";
import Prefooter from "../Prefooter/Prefooter";
import Instagram from "../Instagram/Instagram";
import Footer from "../Footer/Footer";
import VideoPlayer from "../components/videoPlayer";

import styles from './Menu.module.css'; 

function Menu() {
    return (
        <>
            <Hero
                title="Our Menu"
                variant="page"
                image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.menuContainer}>
                <div className={styles.introduction}>
                    <div className={styles.textContainer}>
                        <h4 className={styles.heading}>Explore our menu</h4>

                        <p className={styles.text}>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                    </div>
                </div>

                <MenuItems />
            </div>

            <Prefooter />
            <Instagram />
            <Footer />
        </>
    );
}

export default Menu;