import styles from './Prefooter.module.css';
import image from '../assets/img/prefooter.avif';

function Prefooter() {
    return (
        <div className={styles.prefooter}>
            <div className={styles.wrap}>
                <div className={styles.image}>
                    <img src={image} alt="Prefooter image" />
                </div>

                <div className={styles.col}>
                    <h3 className={styles.heading}>Enjoy Your Stay At Hotel Rose Garden</h3>
                    
                    <p className={styles.text}>Ankleshwar, Nana Borsara, Gujarat 394115, India</p>

                    <button className={styles.btn}>Book Your Stay</button>
                </div>
            </div>
        </div>
    );
}

export default Prefooter;