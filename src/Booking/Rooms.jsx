import styles from "./Booking.module.css";
import CheckoutDetails from "./CheckoutDetails";

// Icons
import { FaBed } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { CiWifiOn } from "react-icons/ci";
import { TbAirConditioning } from "react-icons/tb";
import { FaTv } from "react-icons/fa";

function Rooms() {
    return (
        <div className={styles.roomContainer}>
            <div className={styles.rooms}>
                <div className={styles.heading}>Select Room</div>
                <div className={styles.cardContainer}>
                    <div className={styles.cards}>
                        <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                        <div className={styles.roomDetails}>
                            <h3 className={styles.title}>Standard Room</h3>

                            <p className={styles.description}>
                                A comfortable room with all the basic amenities for a pleasant stay.
                            </p>

                            <div className={styles.amenities}>
                                <span><FaBed /> 2 Twin Beds</span>
                                <span><FaPerson /> Sleeps up to 3 people</span>
                                <div className={styles.wrap}>
                                    <span><CiWifiOn /> Free Wifi</span>
                                    <span><TbAirConditioning /> Airconditioning</span>
                                    <span><FaTv /> TV</span>
                                </div>

                                <div className={styles.btnContainer}>
                                    <button className={`${styles.btn} ${styles.btnViewRoom} `}>View Room</button>

                                    <button className={`${styles.btn} ${styles.btnAddStay}`}>Add To Stay</button>

                                    <div className={styles.price}>
                                        <span className={styles.amount}>$120 /night</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cards}>
                        <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                        <div className={styles.roomDetails}>
                            <h3 className={styles.title}>Standard Room</h3>

                            <p className={styles.description}>
                                A comfortable room with all the basic amenities for a pleasant stay.
                            </p>

                            <div className={styles.amenities}>
                                <span><FaBed /> 2 Twin Beds</span>
                                <span><FaPerson /> Sleeps up to 3 people</span>
                                <div className={styles.wrap}>
                                    <span><CiWifiOn /> Free Wifi</span>
                                    <span><TbAirConditioning /> Airconditioning</span>
                                    <span><FaTv /> TV</span>
                                </div>

                                <div className={styles.btnContainer}>
                                    <button className={`${styles.btn} ${styles.btnViewRoom} `}>View Room</button>

                                    <button className={`${styles.btn} ${styles.btnAddStay}`}>Add To Stay</button>

                                    <div className={styles.price}>
                                        <span className={styles.amount}>$120 /night</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cards}>
                        <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                        <div className={styles.roomDetails}>
                            <h3 className={styles.title}>Standard Room</h3>

                            <p className={styles.description}>
                                A comfortable room with all the basic amenities for a pleasant stay.
                            </p>

                            <div className={styles.amenities}>
                                <span><FaBed /> 2 Twin Beds</span>
                                <span><FaPerson /> Sleeps up to 3 people</span>
                                <div className={styles.wrap}>
                                    <span><CiWifiOn /> Free Wifi</span>
                                    <span><TbAirConditioning /> Airconditioning</span>
                                    <span><FaTv /> TV</span>
                                </div>

                                <div className={styles.btnContainer}>
                                    <button className={`${styles.btn} ${styles.btnViewRoom} `}>View Room</button>

                                    <button className={`${styles.btn} ${styles.btnAddStay}`}>Add To Stay</button>

                                    <div className={styles.price}>
                                        <span className={styles.amount}>$120 /night</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Checkout Details Component */}
            <div className={styles.checkoutDetails}>
                <CheckoutDetails />
            </div>
        </div>
    );
}

export default Rooms;