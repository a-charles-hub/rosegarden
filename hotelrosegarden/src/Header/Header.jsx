import Logo from '../assets/react.svg';
import styles from './Header.module.css';
import { FaFacebook, FaInstagram, FaTwitter, FaCalendarAlt, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
        <nav className={styles.nav}>
            <div className={styles.navLinks}>
                {/* Logo */}
                <div className={styles.logo}>
                    <img src={Logo} alt="Hotel Rose Garden Logo" />
                </div>

                {/* Navigation links */}
                <ul className={styles.navCenter}>
                    <li><Link to="/">Overview</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/accommodations">Accommodations</Link></li>
                    <li><Link to="/amenities">Amenities</Link></li>
                </ul>

                <ul className={styles.navRight}>
                    <li><Link to="/booking"><FaCalendarAlt className={styles.icon}/> Book Now</Link></li>
                    <li><Link to="/auth/login"><FaSignInAlt /> Sign In</Link></li>
                </ul>

                {/* Social icons */}
                <div className={styles.socials}>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Header;
