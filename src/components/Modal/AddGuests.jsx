import { useState } from "react";
import styles from "./Modal.module.css";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";

function Guests({ guest, setGuest }) {
    const addGuest = () => {
        setGuest(prev => {
            if(prev < 4) {
                return prev + 1;
            } else {
                return prev;
            }
        });
    }

    const removeGuest = () => {
        setGuest(prev => {
            if(prev > 1) {
                return prev - 1;
            } else {
                return prev;
            }
        });
    }

    return (
        <div className={styles.guestsContainer}>
            <div className={styles.guestDetails}>
                <label htmlFor="guests">Guests</label>

                <div className={styles.btnContainer}>
                    <button className={`${styles.decreaseBtn} ${styles.btn}`} onClick={removeGuest} disabled={guest <= 1}><FaMinus /></button>
                    
                    {/** Render guest count */}
                    <span className={styles.guestNumber}>{guest}</span>

                    <button className={`${styles.addBtn} ${styles.btn}`} onClick={addGuest} disabled={guest >= 4}><IoMdAdd /></button>
                </div>
            </div>
        </div>
    );
}

export default Guests;