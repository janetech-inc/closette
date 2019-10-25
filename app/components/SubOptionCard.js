import React from 'react';
import './SubOptionCard.scss';

const SubOptionCard = () => {
  return (
    <div className="SubOptionCard">
      <h2>4 Items/Month</h2>
      <p>$200/month</p>
      <hr></hr>
      <ol>
        <p>Reserve looks for upcoming plans.</p>
        <li>Placeholder Text</li>
        <li>Placeholder Text</li>
        <li>Placeholder Text</li>
      </ol>

      <button className="enroll-btn">Enroll</button>
    </div>
  );
}

export default SubOptionCard;
