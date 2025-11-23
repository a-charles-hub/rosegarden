import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";
import styles from './Modal/Modal.module.css';

function DatePicker({ range, onDateSelect }) {

  const handleSelect = (item) => {
    const selection = item.selection;
    onDateSelect({
      startDate: selection.startDate,
      endDate: selection.endDate,
      key: "selection"
    });
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <DateRangePicker
        className={styles.datePicker}
        ranges={[range]}       
        onChange={handleSelect}
        months={2}
        direction="horizontal"
        minDate={new Date()}
        maxDate={addDays(new Date(), 30)}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        staticRanges={[]}        // hides presets sidebar
        inputRanges={[]}         // hides input ranges (fixed)
      />
    </div>
  );
}

export default DatePicker;
