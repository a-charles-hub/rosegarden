import { useState, useEffect } from "react";
import styles from "./Rooms.module.css";
import { Link } from "react-router-dom";

function Rooms() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All");

  // Dropdown options
  const options = ["All", "One Bedroom", "Two Bedrooms", "Three Bedrooms"];
  
  // Room dataset
  const rooms = [
    {
      title: "Standard Room",
      image: "https://images.unsplash.com/photo-1648383228240-6ed939727ad6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bedRooms: 2,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nemo eum odio laboriosam nam dolorum, quasi esse recusandae adipisci libero dolores, laudantium laborum. Officia aliquid saepe quae rem magni culpa?",
      roomNumber: 101
    },
    {
      title: "Family Room",
      image: "https://images.unsplash.com/photo-1626868449668-fb47a048d9cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      bedRooms: 3,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nemo eum odio laboriosam nam dolorum, quasi esse recusandae adipisci libero dolores, laudantium laborum. Officia aliquid saepe quae rem magni culpa?",
      roomNumber: 102
    },
    {
      title: "Deluxe Room",
      image: "https://plus.unsplash.com/premium_photo-1733353309577-ebe815f18392?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
      bedRooms: 3,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nemo eum odio laboriosam nam dolorum, quasi esse recusandae adipisci libero dolores, laudantium laborum. Officia aliquid saepe quae rem magni culpa?",
      roomNumber: 103
    }
  ]


  // Filtered rooms
  const selectedRooms = 
    selected == "All"
    ? rooms
    : rooms.filter(room => room.bedRooms === bedRoomMap[selected]
  );

  return (
    <div className={styles.roomsContainer}>
      <div className={styles.roomHeading}>
        <h3>Our comfortable rooms</h3>

        <Link to={"/booking"}>
          <span>All rooms</span>
        </Link>
      </div>
      <div className={styles.roomsGrid}>
        {selectedRooms.map((room) =>
          <div className={styles.roomCard}>
            <div className={styles.image}>
              <img src={room.image} alt={room.title} />  
            </div>

            <div className={styles.roomCategory}>
              <span className={styles.title}>{room.title}</span>

              <span className={styles.description}>{room.description}</span>

              <div className={styles.roomDetails}>
                <span>Details</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Rooms;
