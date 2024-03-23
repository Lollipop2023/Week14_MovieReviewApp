// everyone on the internet insisted that having the list of movies as its own component was better
// honestly not sure if I did this even remotely right. Its a hodge-podge of recommendations I tried
// to piece together. My head hurts.
import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
