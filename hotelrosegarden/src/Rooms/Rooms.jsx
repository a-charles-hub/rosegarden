import { useState, useEffect } from "react";
import styles from "./Rooms.module.css";

function Rooms() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All");

  const options = ["All", "One Bedroom", "Two Bedrooms", "Three Bedrooms"];

  // Close dropdown when clicking outside
  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  }

  return (
    <div className={styles.roomsContainer}>
      <div className={styles.dropdownContainer}>
        <span>Show</span>
      
        <div className={styles.dropdown}>
        <button
          type="button" 
          className={styles.dropdownButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected} <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
        </button>

          {isOpen && (
            <div className={styles.dropdownContent}>
              {options.map((option) => (
                <div
                  key={option}
                  className={styles.option}
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.roomsGrid}>
        <div className={styles.roomCard}>
          <div className={styles.image}>
            <img src="https://images.unsplash.com/photo-1648383228240-6ed939727ad6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>

          <div className={styles.roomCategory}>
            <span>Twin Room</span>
          </div>
        </div>

        <div className={styles.roomCard}>
          <div className={styles.image}>
            <img src="https://images.unsplash.com/photo-1626868449668-fb47a048d9cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="" />
          </div>

          <div className={styles.roomCategory}>
            <span>Family Room</span>
          </div>
        </div>

        <div className={styles.roomCard}>
          <div className={styles.image}>
            <img src="https://plus.unsplash.com/premium_photo-1733353309577-ebe815f18392?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171" alt="" />
          </div>

          <div className={styles.roomCategory}>
            <span>Deluxe Room</span>
          </div>
        </div>

        <div className={styles.roomCard}>
          <div className={styles.image}>
            <img src="https://plus.unsplash.com/premium_photo-1744864165177-22dfe43dceb7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" alt="" />
          </div>

          <div className={styles.roomCategory}>
            <span>Junior Suite</span>
          </div>
        </div>

        <div className={styles.roomCard}>
          <div className={styles.image}>
            <img src="https://plus.unsplash.com/premium_photo-1682377520349-f56f47cb633f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171" alt="" />
          </div>

          <div className={styles.roomCategory}>
            <span>Premium Twin</span>
          </div>
        </div>

        <div className={styles.roomCard}>
          <div className={styles.image}>
            <img src="https://plus.unsplash.com/premium_photo-1661846577575-560fd37a2a19?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1137" alt="" />
          </div>

          <div className={styles.roomCategory}>
            <span>Standard Room</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
