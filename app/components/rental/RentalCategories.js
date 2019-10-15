import "./RentalCategories.scss";

const RentalCategories = () => (
  <div className="RentalCategories">
    <p className="list-header">I'm Renting For...</p>
    <ul className="categories-list">
      <li className="category">Black Tie</li>
      <li className="category">Cocktail</li>
      <li className="category">Vacation</li>
      <li className="category">Daytime</li>
      <li className="category">Nighttime</li>
    </ul>
  </div>
);

export default RentalCategories;