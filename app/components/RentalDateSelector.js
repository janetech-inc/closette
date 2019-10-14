import { useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { addDays, subDays, toDate, format } from 'date-fns'

import './RentalDateSelector.scss';
import Modal from './utils/modal/Modal';

const RentalDateSelector = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(startDate, 3));

  const modalProps = {
    ariaLabel: 'A label describing the Modal\'s current content',
    role: 'dialog'
  };

  const DatePickerContainer = ({ className, children }) => {
    return (
      <div style={{ padding: "16px", background: "#216ba5", color: "#fff", display: "flex", justifyContent: "center" }}>
        <CalendarContainer className={className}>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  return (
    <div className="RentalDateSelector">
      <div className="left"></div>
      <div className="center">
        <Modal {...modalProps} triggerText={`${format(startDate, 'MM-dd')} - ${format(endDate, 'MM-dd')}`}>
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
            calendarContainer={DatePickerContainer}
            inline
          />
        </Modal>
      </div>
      <div className="right">
        <Modal {...modalProps} triggerText="&#43;">
          <DatePicker
            selected={startDate}
            onChange={date => {
              setStartDate(date)
              setEndDate(addDays(date, 3))
            }}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="MM-dd"
            calendarContainer={DatePickerContainer}
            inline
          />
        </Modal>
      </div>
    </div>
  );
}

export default RentalDateSelector;
