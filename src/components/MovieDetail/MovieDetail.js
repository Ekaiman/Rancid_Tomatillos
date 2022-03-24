import React from 'react';

function MovieDetail({ movie, returnToMain }) {
  return (
    <div className='movieDetail'>
      <h1>{movie.title}</h1>
      <h2>{movie.release_date}</h2>
      <h2>{movie.average_rating}</h2>
      <img src={movie.poster_path}/>
      <img src={movie.backdrop_path}/>
      <button onClick={()=>returnToMain()}>Go Back</button>

    </div>
  )
}

export default MovieDetail;
