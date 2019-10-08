const rentalOptions = {
  days: [4, 8],
  buy: false
}

const RentalSelector = props => (
  <div className="RentalSelector">
    <p>Select Rental Period</p>
    <div className="rental-options">
      {rentalOptions.days.map(dayAmount => (
        <button 
          className="option" 
          key={`${dayAmount}-days`}
          onClick={() => props.handleRentalPeriodChange(dayAmount)}
          style={{ border: props.currentRentalPeriod == dayAmount ? '1px solid black' : 'none' }}
        >
          {dayAmount} Days
        </button>
      ))}
      <button className="option" onClick={props.handleSelectOptionToBuy} style={{ border: props.buySelected ? '1px solid black' : 'none' }}>Buy</button>

      <style>{`
        .RentalSelector {
          display: flex;
          flex-direction: column;
          margin: 10px;
        }
      
        .rental-options {
          display: flex;
          flex-direction: row;
        }

        .option {
          border: 1px solid grey;
          margin: 0 5px;
          padding: 20px;
          outline: none;
        }
      `}</style>
    </div>
  </div>
);

export default RentalSelector;