import { useState, useEffect } from "react";
import styles from "./Rooms.module.css";

function Rooms() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All");

  // Dropdown options
  const options = ["All", "One Bedroom", "Two Bedrooms", "Three Bedrooms"];
  
  // Room dataset
  const rooms = [
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
    },
    {
      title: "Standard Room",
      image: "https://plus.unsplash.com/premium_photo-1661846577575-560fd37a2a19?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1137",
      bedRooms: 1
    },
    {
      title: "Premium Room",
      image: "https://plus.unsplash.com/premium_photo-1661962493427-910e3333cf5a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
      bedRooms: 2
    },
    {
      title: "Juniour Room",
      image: "https://plus.unsplash.com/premium_photo-1744864165177-22dfe43dceb7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      bedRooms: 2
    }
  ]

  // Filter rooms based on selected option
  const bedRoomMap = {
    "One Bedroom": 1,
    "Two Bedrooms": 2,
    "Three Bedrooms": 3
  }

  // Filtered rooms
  const selectedRooms = 
    selected == "All"
    ? rooms
    : rooms.filter(room => room.bedRooms === bedRoomMap[selected]
  );

  console.log("Selected Rooms:", selectedRooms);

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

      <div className={`${styles.roomsGrid} ${selectedRooms.length === 1 || selectedRooms.length === 2 ? styles.multi : ""}`}>
        {selectedRooms.map((room) =>
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
