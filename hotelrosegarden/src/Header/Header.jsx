import React, { useState } from 'react';
import styles from './Header.module.css';
import { FaFacebook, FaInstagram, FaTwitter, FaCalendarAlt, FaSignInAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";

import { Link } from "react-router-dom";

function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header>
        <nav className={styles.nav}>
            <div className={styles.navLinks}>
                {/* Logo */}
                <div className={styles.logo}>
                    <span>Hotel Rose Garden</span>
                </div>

                {/* Navigation links */}
                <ul className={styles.navRight}>
                    <li><Link to="/">Overview</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/accommodations">Accommodations</Link></li>
                    <li><Link to="/amenities">Amenities</Link></li>

                    <li><Link to="/booking"><FaCalendarAlt className={styles.icon}/> Book Now</Link></li>
                    <li><Link to="/auth/login"><FaSignInAlt /> Sign In</Link></li>
                </ul>

                 {/* Sidebar links */}
                <div className={styles.sideBar}
                style={{ display: isSidebarOpen ? "block" : "none" }}
                >
                    <TfiClose className={styles.closeBtn}
                    onClick={() => setIsSidebarOpen(false)}
                    />
                    <ul>
                        <li><Link to="/">Overview</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/accommodations">Accommodations</Link></li>
                        <li><Link to="/amenities">Amenities</Link></li>
                        <li><Link to="/booking"><FaCalendarAlt className={styles.icon}/> Book Now</Link></li>
                        <li><Link to="/auth/login"><FaSignInAlt /> Sign In</Link></li>
                    </ul>
                </div>
                

                <FiMenu className={styles.menuBurger} onClick={() => setIsSidebarOpen(true)} />

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
