// Ok, the star fill rating thing is cool in theory. It was fun looking up.
// Pick an actor and click. :) 
import React, { useState } from 'react';

const Stars = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? 'star filled' : 'star'}
          onClick={() => handleRatingChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Stars;
