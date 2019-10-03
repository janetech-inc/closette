const rentalOptions = {
  days: [4, 8],
  buy: false
}

const RentalSelector = () => (
  <div className="RentalSelector">
    <p>Select Rental Period</p>
    <div className="rental-options">
      {rentalOptions.days.map(dayAmount => (
        <span className="option" key={`${dayAmount}-days`}>{dayAmount}</span>
      ))}
      <span className="option">Buy</span>

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
          border: 1px solid black;
          padding: 20px;
        }
      `}</style>
    </div>
  </div>
);

export default RentalSelector;