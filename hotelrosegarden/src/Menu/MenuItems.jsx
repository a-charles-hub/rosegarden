import { useState, useEffect } from "react";
import styles from './Menu.module.css';

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
            className={`${styles.menuSelection} ${
              selectedCategory === cat ? styles.active : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
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
        {filteredItems.map(item => (
          <div className={styles.menuCard} key={item.id}>
            <img src={item.image} alt={item.title} className={styles.menuImg} />

            <div className={styles.menuInfo}>
              <h4 className={styles.menuTitle}>{item.title}</h4>
              <p className={styles.menuDesc}>{item.description}</p>
              <span className={styles.price}>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuItems;
