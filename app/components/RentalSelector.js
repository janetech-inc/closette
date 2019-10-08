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

      <style>{`
        .RentalSelector {
          display: flex;
          flex-direction: column;
        }
      
        .rental-options {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        .option {
          border: 1px solid grey;
          padding: 20px;
          outline: none;
        }

        .selected {
          border: 1px solid black;
        }
      `}</style>
    </div>
  </div>
);

export default RentalSelector;