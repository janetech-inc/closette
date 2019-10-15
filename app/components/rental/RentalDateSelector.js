import { useState, useEffect } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { addDays, subDays, toDate, format } from 'date-fns'

import './RentalDateSelector.scss';
import Modal from '../utils/modal/Modal';

const RentalDateSelector = ({ rentalPeriod }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(startDate, rentalPeriod - 1));

  const modalProps = {
    ariaLabel: 'A label describing the Modal\'s current content',
    role: 'dialog'
  };

  const DatePickerContainer = ({ className, children }) => {
    return (
      <div style={{ padding: "16px", display: "flex", justifyContent: "center" }}>
        <CalendarContainer className={className}>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  useEffect(() => {
    rentalPeriod && setEndDate(addDays(startDate, rentalPeriod - 1))
  }, [rentalPeriod]);

  return (
    <div className="RentalDateSelector">
      <div className="left"></div>
      <div className="center">
        <Modal {...modalProps} triggerText={`${format(startDate, 'MM-dd')} - ${format(endDate, 'MM-dd')}`}>
          <p className="datepicker-header">Your Rental Dates</p>
          <DatePicker
            selected={startDate}
            onChange={date => {
              setStartDate(date)
              setEndDate(addDays(date, rentalPeriod - 1))
            }}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            value={`${format(startDate, 'MM-dd')} - ${format(endDate, 'MM-dd')}`}
            dateFormat="MM-dd"
            minDate={new Date()}
            calendarContainer={DatePickerContainer}
            inline
          />
          <div className="legend">
            <div className="section">
              <div className="symbol" id="unavailable-symbol"></div>
              <p className="text">Unavailable</p>
            </div>
            <div className="section">
              <div className="symbol" id="at-your-door-symbol"></div>
              <p className="text">At your door by 8pm</p>
            </div>
            <div className="section">
              <div className="symbol" id="dates-selected-symbol"></div>
              <p className="text">Dates Selected</p>
            </div>
            <div className="section">
              <div className="symbol" id="drop-at-ups-symbol"></div>
              <p className="text">Drop at UPS by noon</p>
            </div>
          </div>
        </Modal>
      </div>
      <div className="right">
        <Modal {...modalProps} triggerText="&#43;">
          <DatePicker
            selected={startDate}
            onChange={date => {
              setStartDate(date)
              setEndDate(addDays(date, rentalPeriod - 1))
            }}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="MM-dd"
            minDate={new Date()}
            calendarContainer={DatePickerContainer}
            inline
          />
        </Modal>
      </div>
    </div>
  );
}

export default RentalDateSelector;
