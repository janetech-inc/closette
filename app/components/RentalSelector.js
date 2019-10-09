import "./RentalSelector.scss";

const rentalOptions = {
  days: [4, 10],
  buy: false
}

const RentalSelector = props => (
  <div className="RentalSelector">
    <p>Select Rental Period</p>
    <div className="rental-options">
      {rentalOptions.days.map(dayAmount => (
        <button 
          className={props.currentRentalPeriod == dayAmount ? 'option selected' : 'option'}
          key={`${dayAmount}-days`}
          onClick={() => props.handleRentalPeriodChange(dayAmount)}
        >
          {dayAmount} Days
        </button>
      ))}
      <button className={props.buySelected ? 'option selected' : 'option'} onClick={props.handleSelectOptionToBuy}>Buy</button>
    </div>
  </div>
);

export default RentalSelector;