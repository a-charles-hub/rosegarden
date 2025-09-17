import styles from './Discover.module.css';
import Cards from '../components/Cards';

function Discover() {
    return (
        <div className={styles.container}>
            <div>
                <h3 className={styles.heading}>Discover More</h3>
            </div>

            <div className={styles.cardContainer}>
                <Cards />
            </div>
        </div>
    );
}

export default Discover;