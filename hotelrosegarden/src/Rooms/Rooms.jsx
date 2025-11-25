import { useState, useEffect } from "react";
import styles from "./Rooms.module.css";

function Rooms() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All");

  // Room dataset
  const roomCategory = [
    {
      title: "Twin Room",
      image: "https://images.unsplash.com/photo-1648383228240-6ed939727ad6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bedRooms: 2
    },
    {
      title: "Family Room",
      image: "https://images.unsplash.com/photo-1626868449668-fb47a048d9cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      bedRooms: 3
    },
    {
      title: "Deluxe Room",
      image: "https://plus.unsplash.com/premium_photo-1733353309577-ebe815f18392?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
      bedRooms: 3
    }
  ]

  return (
    <div className={styles.roomsContainer}>
      <div className={styles.roomsHeader}>
        <h2>Our comfortable rooms</h2>

        <span className={styles.allRooms}>All rooms</span>
      </div>
      
      <div className={`${styles.roomsGrid}`}>
        {roomCategory.map((room) =>
          <div className={styles.roomCard}>
            <div className={styles.image}>
              <img src={room.image} alt={room.title} />  
            </div>

            <div className={styles.roomCategory}>
              <span>{room.title}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Rooms;
