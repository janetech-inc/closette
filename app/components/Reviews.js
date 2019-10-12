import Link from 'next/link';

import './Reviews.scss';

const Reviews = () => (
  <div className="Reviews">
    <div className="reviews-header">
      <div className="left-section">
        <h3 className="title">Reviews</h3>
        <div className="stars">&#9734; &#9734; &#9734; &#9734; &#9734;</div>
      </div>
      <Link href="/">
        <a className="right-section">All &#8594;</a>
      </Link>
    </div>
  </div>
);

export default Reviews;