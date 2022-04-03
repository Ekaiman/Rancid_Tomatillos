import React from 'react';
import './Movie.css';

function Movie({
  rating,
  id,
  poster,
  title,
  displayOneMovie
}) {
  
  return (
    <div className='movie'>
      <img
        onClick={() => displayOneMovie(id)}
        className='poster-image'
        src={poster}
        alt={`movie poster for ${title}`}
      />
      <p className='movie-rating'>{Math.round(rating)}
        <span className='fa-solid fa-star'></span>
      </p>
      <h1 className='movie-title'>{title}</h1>
    </div>
  );
}

export default Movie;
