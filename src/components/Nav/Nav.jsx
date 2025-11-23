import styles from "../Nav/Nav.module.css";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className={styles.navContainer}>
            <Link to="/accommodations" className={styles.navBrand}>Hotel Rose Garden
            </Link>

            <div className={styles.search}>
                <Search />
            </div>

            <div className={styles.login}>
                <button className={styles.btnLogin}>Login / Signup</button>
            </div>
        </div>
    );
}

export default Nav;