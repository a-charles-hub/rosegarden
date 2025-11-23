import { useState } from 'react';
import styles from './Booking.module.css';
import Rooms from './Rooms.jsx';
import PersonalDetails from './PersonalDetails.jsx';
import BookingConfirmation from './BookingConfirmation.jsx';

import Reviews from '../Reviews/Reviews.jsx';
import Footer from '../Footer/Footer.jsx';

function Booking() {
  const [status, setStatus] = useState(1);

  const isLocked = status === 3; // lock previous steps after confirmation

  return (
    <div className={styles.bookingContainer}>
      <section className={styles.headingSection}>
        <div className={styles.progressBar}>
          <div className={styles.status}>
            <button
              className={`${styles.selectRoomBtn} ${status >= 1 ? styles.active : ""}`}
              onClick={() => !isLocked && setStatus(1)}
              disabled={isLocked} // disable step 1 if confirmed
            >
              1
            </button>
            <p>Select Room</p>
          </div>

          <div className={styles.status}>
            <button
              className={`${styles.personalBtn} ${status >= 2 ? styles.active : ""}`}
              onClick={() => !isLocked && setStatus(2)}
              disabled={isLocked} // disable step 2 if confirmed
            >
              2
            </button>
            <p>Personal Details</p>
          </div>

          <div className={styles.status}>
            <button
              className={`${styles.confirmationBtn} ${status >= 3 ? styles.active : ""}`}
              onClick={() => setStatus(3)}
            >
              3
            </button>
            <p>Confirmation</p>
          </div>
        </div>
      </section>

      <div className={styles.stepContent}>
        {status === 1 && <Rooms />}
        {status === 2 && <PersonalDetails />}
        {status === 3 && <BookingConfirmation />}
      </div>

      <div className={styles.reviewSection}>
        <Reviews />
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
    
  );
}

export default Booking;
