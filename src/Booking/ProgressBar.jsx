import styles from './Booking.module.css';
import { useState } from 'react';
import BookingConfirmation from './BookingConfirmation';


function ProgressBar() {
    const [status, setStatus] = useState(1);

    return (
        <div className={styles.bookingContainer}>
            <div>Current: {status}</div>
            <section className={styles.headingSection}>
                <div className={styles.progressBar}>
                    <div className={styles.status}>
                        <button className={`${styles.selectRoomBtn} ${status >= 1 ? styles.active : ""}`} onClick={() => status < 3 && setStatus(1)} disabled={status === 3}>1</button>
                        <p>Select Room</p>
                    </div>

                    <div className={styles.status}>
                        <button className={`${styles.personalBtn} ${status >= 2 ? styles.active : ""}`} onClick={() => status < 3 && setStatus(2)} disabled={status === 3}>2</button>
                        <p>Personal Details</p>
                    </div>

                    <div className={styles.status}>
                        <button className={`${styles.confirmationBtn} ${status >= 3 ? styles.active : ""}`} onClick={() => setStatus(3)}>3</button>
                        <p>Confirmation</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProgressBar;