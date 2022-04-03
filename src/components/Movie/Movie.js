import React from 'react';
import './Movie.css';

function Movie({
  rating,
  backDropPath,
  id,
  posterPath,
  releaseDate,
  title,
  displayOneMovie
}) {
  // console.log('id in movie', id)
  // console.log('backdrop in movie', backDropPath)
  return (
    <div className='movie'>
      <img
        onClick={() => displayOneMovie(id)}
        className='poster-image'
        src={posterPath}
        alt=''
      />
      <h1 className='movie-title'>{title}</h1>
      <p className='movie-rating'>{Math.round(rating)}
        <span className='fa-solid fa-star'></span>
      </p>
    </div>
  );
}

export default Movie;
