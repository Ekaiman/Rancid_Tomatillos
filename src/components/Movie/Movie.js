import React from 'react';
import './Movie.css';

function Movie({ rating, backDropPath, id, posterPath, releaseDate, title, displayOneMovie }) {
  return (
    <div className='movie'>
      <img onClick={()=> (displayOneMovie(id))} className='poster-image' src={posterPath} />
      <h1>{title}</h1>
    </div>
  );
}

export default Movie;
