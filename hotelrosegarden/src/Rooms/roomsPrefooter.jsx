import styles from './Rooms.module.css';

function RoomsPrefooter() {
    return (
        <div className={styles.roomsPrefooter}>
            <div className={styles.prefooterContent}>
                <div className={styles.rating}></div>

                <div className={styles.heading}>
                    <h2>Enjoy a comfortable and relaxing at Hotel Rose Garden</h2>
                </div>

                <div className={styles.subheading}>
                    <h4>Relax and unwind in our beautiful appointed rooms at Hotel Rose Garden, offering comfort, modern amenities, and serene surroundings.</h4>
                </div>
            </div>
        </div>
    );
}

export default RoomsPrefooter;