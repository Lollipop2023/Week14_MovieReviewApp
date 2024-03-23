// This is where I put my "form" to add a review. Basically just a text box with a submit
// button. I look at this like a child of the MovieList node. I'm working on predrawing a
// flow sheet to try and help me keep track of things.
import React, { useState } from 'react';

const ReviewForm = ({ onAddReview }) => {
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim() !== '') {
      onAddReview(reviewText);
      setReviewText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Write your review..."
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
