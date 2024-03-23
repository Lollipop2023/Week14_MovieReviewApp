// This page is to control how each movie is displayed and the reviews can be added or viewed.
// I really wanted to try to make something special, clearly need to learn my boundaries with time constraints, 
// my goal was to be able to display basically a movie cover with a synopsis as a card and have it be selectable to view the 
// reviews or add one via a form on a separate page.
import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import './style.css';

const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState([]);
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleAddReview = (review) => {
    setReviews([...reviews, review]);
  };

  const handleReviewButtonClick = () => {
    setShowReviewForm(!showReviewForm);
  };

  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.synopsis}</p>
      <button onClick={handleReviewButtonClick}>
        {showReviewForm ? 'Hide Review Form' : 'Review'}
      </button>
      {showReviewForm && (
        <>
          <Stars />
          <ReviewList reviews={reviews} />
          <ReviewForm onAddReview={handleAddReview} />
        </>
      )}
      <a href={`reviews.html#${movie.title}`}>Read Reviews</a>
    </div>
  );
};

export default Movie;
