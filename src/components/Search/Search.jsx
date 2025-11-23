import { useState } from "react";
import { addDays } from "date-fns";
import Modal from "../Modal/Modal";
import DatePicker from "../DatePicker";
import styles from "./Search.module.css";
import Guests from "../Modal/AddGuests";
import { format } from "date-fns";

function Search() {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openGuests, setOpenGuests] = useState(false);

  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date(),
    endDate: addDays(new Date(), 1),
    key: "selection"
  });

  const handleDateSelect = (range) => {
    setSelectedRange(range);
  };
  
  const [guest, setGuest] = useState(1);

  return (
    <div className={styles.searchBar}>
      <div className={styles.search}>

        {/* Dates input */}
        <div className={styles.dates}>
        <input
          type="text"
          readOnly
          value={`${format(selectedRange.startDate, "EEE, MMM dd")} - ${format(selectedRange.endDate, "EEE, MMM dd")}`}
          onClick={() => setOpenDatePicker(true)}
        />

          {openDatePicker && (
            <Modal onClose={() => setOpenDatePicker(false)}>
              <DatePicker range={selectedRange} onDateSelect={handleDateSelect} />
            </Modal>
          )}
        </div>

        {/* Guests input */}
        <div className={styles.guests}>
          <input
            type="text"
            readOnly
            value={`${guest} Guests`}
            onClick={() => setOpenGuests(true)}
          />

          {openGuests && (
            <Modal onClose={() => setOpenGuests(false)}>
              {/** Pass callback to child */}
              <Guests guest={guest} setGuest={setGuest}/>
            </Modal>
          )}
        </div>

        <div className={styles.searchBtn}>
          <button className={styles.btnSearch}>Search</button>
        </div>

      </div>
    </div>
  );
}

export default Search;
