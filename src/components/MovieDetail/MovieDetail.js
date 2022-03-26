import React from 'react';
import './MovieDetail.css';

function MovieDetail({ movie, returnToMain }) {
  return (
    <div
      className='movieDetail'
      style={{
        backgroundImage: `url(${movie.backdrop_path})`
      }}
    >
      <div className='gradient'>
        <button
          className='view-all-movies-button'
          onClick={() => returnToMain()}
        >
          View All Movies
        </button>
        {/* <img className='back-drop' src={movie.backdrop_path} /> */}
        <section className='title-poster'>
          <img className='poster' src={movie.poster_path} />
          <div className='text-wrapper'>
            <h1>{movie.title}</h1>
          </div>
          <h2>{movie.release_date}</h2>
          <h2>{movie.average_rating}</h2>
        </section>
      </div>
    </div>
  );
}

export default MovieDetail;
