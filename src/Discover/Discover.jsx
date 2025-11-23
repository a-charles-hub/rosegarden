import styles from './Discover.module.css';
import Cards from '../components/Cards';

function Discover() {
    return (
        <div className={styles.container}>
            <div>
                <h3 className={styles.heading}>Discover More</h3>
            </div>
             <Cards />
        </div>
    );
}

export default Discover;