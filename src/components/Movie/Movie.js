import React from 'react';
import './Movie.css';

function Movie({ rating, backDropPath, id, posterPath, releaseDate, title }) {
  return (
    <div className='movie'>
      <img className='poster-image' src={posterPath} />
      <h1>{title}</h1>
    </div>
  );
}

export default Movie;
