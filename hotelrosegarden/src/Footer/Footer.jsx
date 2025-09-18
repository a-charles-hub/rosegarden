import styles from "./Footer.module.css"; // CSS Module import

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        {/* Address & Reservations */}
        <div className={styles.footerWrap}>
          <div className={`${styles.footerHeading} ${styles.address}`}>
            <h4>Address</h4>
            <span className={styles.location}>
              Ankleshwar, Nana Borsara, Gujarat 394115, India
            </span>
          </div>

          <div className={styles.reservations}>
            <h4>Reservations</h4>
            <span className={styles.number}>(919) 8765 43210</span>
          </div>
        </div>

        {/* About */}
        <div className={`${styles.footerWrap} ${styles.about}`}>
          <div className={`${styles.footerHeading} ${styles.about}`}>
            <h4>About</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#">Blog & News</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Subscribe</a></li>
            </ul>
          </div>
        </div>

        {/* Your Stay */}
        <div className={styles.footerWrap}>
          <div className={`${styles.footerHeading} ${styles["your-stay"]}`}>
            <h4>Your Stay</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#">Our Menu</a></li>
              <li><a href="#">Amenities</a></li>
              <li><a href="#">Accomodations</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
        </div>

        {/* Connect */}
        <div className={`${styles.footerWrap} ${styles.connect}`}>
          <div className={`${styles.footerHeading} ${styles.connect}`}>
            <h4>Connect</h4>
            <div className={styles.footerSocials}>
              <span>< FaInstagram /></span>
              <span>< FaXTwitter /></span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer End */}
      <div className={styles.footerEnd}>
        <div className={styles.copyright}>
          <span>© 2025 Hotel Rose Garden. All Rights Reserved.</span>
        </div>
        <div className={styles.developer}>
          <span>
            Powered by <a href="https://www.webinnovate.io">Web Innovate</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
