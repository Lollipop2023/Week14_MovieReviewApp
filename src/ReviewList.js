// The other child of the MovieList node. This is where I would like reviews to be 
// viewable once they are created.
import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <p>{review}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
