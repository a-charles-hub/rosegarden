import Hero from "../Hero/Hero";
import Rooms from "../Rooms/Rooms";
import RoomsPrefooter from "../Rooms/roomsPrefooter";
import Prefooter from "../Prefooter/Prefooter";
import Footer from "../Footer/Footer";

import styles from "./Accommodations.module.css";

function Accommodations() {
    return (
        <>
            <Hero
                title="Accommodations"
                variant="page"
                image = "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071"
            />

            <section className={styles.introSection}>
                <div className={styles.introText}>
                    <h2>Check In. Chill Out.</h2>
                    <p>Experience comfort and calm at Hotel Rose Garden — your home in the heart of the city.</p>
                </div>
            </section>

            <Rooms />
            <RoomsPrefooter />
            <Prefooter />
            <Footer />
        </>
    );
}

export default Accommodations;