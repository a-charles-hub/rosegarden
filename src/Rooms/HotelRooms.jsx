import styles from './HotelRooms.module.css';
import Nav from "../components/Nav/Nav";

import Rooms from '../Booking/Rooms.jsx';

function HotelRooms() {
    return (
        <>
        {/** Navigation */}
        <Nav />

        <div className={styles.hotelContainer}>
            <div className={styles.rooms}>
                <Rooms />
            </div>
        </div>
        </>
    );
}

export default HotelRooms;