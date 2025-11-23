import { useState, useEffect } from "react";
import menuIcons from "../components/menuIcons";
import styles from "./MenuItems.module.css";

function MenuItems() {
    // Set state to all menu items
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [menuItems, setMenuItems] = useState([]);

useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("/menu.json"); // ✅ no need for ../../public
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
}, []);

// Set categories for nav
// Use Set to get unique categories
// Map through menuItems to get categories
const categories = ["All", ...new Set(menuItems.map(item => item.category))];

// ✅ filter items by category
// If user selects "All", show all items
// Else filter items by selected category
const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter(item => item.category === selectedCategory);

      console.log("Filtered Items:", filteredItems);
  return (
      <div className={styles.menuItems}>
        {/* Categories Nav */}
        <div className={styles.menuNav}>
        {categories.map(cat => (
          <div
            key={cat}
            className={`${styles.menu} ${
              selectedCategory === cat ? styles.active : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {/* show icon based on category */}
            <img
              src={menuIcons[cat]} 
              alt={cat}
              className={styles.menuIcon}
            />
            <span className={styles.menuText}>{cat}</span>
          </div>
        ))}
      </div>

      {/* Heading */}
      <div className={styles.menuHeading}>
        <h3 className={styles.heading}>Our Dishes</h3>
      </div>

      {/* Filtered Menu Grid */}
      <div className={styles.menuGrid}>
        <div className={styles.cards}>

          {/** Map menu cards */}
          {filteredItems.map((item) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.cardImage}>
                <img src={item.image} alt="" />
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>
                  <h4 className={styles.title}>{item.title}</h4>
                </div>

                <div className={styles.cardDescription}>
                  <p className={styles.description}>{item.description}</p>
                </div>

                <div className={styles.cardPrice}>
                  <h4 className={styles.price}>{item.price}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuItems;


