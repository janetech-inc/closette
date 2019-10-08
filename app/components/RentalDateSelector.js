import { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays, subDays, toDate, format } from 'date-fns'

import './RentalDateSelector.scss';

const RentalDateSelector = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(startDate, 3));

  return (
    <div className="RentalDateSelector">
      <div className="left"></div>
      <div className="center">
        <DatePicker
          selected={startDate}
          onChange={date => {
            setStartDate(date)
            setEndDate(addDays(date, 3))
          }}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          value={`${format(startDate, 'MM-dd')} - ${format(endDate, 'MM-dd')}`}
          dateFormat="MM-dd"
        />
      </div>
      <div className="right">+</div>
    </div>
  );
}

export default RentalDateSelector;
