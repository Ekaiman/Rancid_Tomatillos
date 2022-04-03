import React from 'react';
import Movie from '../Movie/Movie.js';
import { Link } from 'react-router-dom';
import './MovieWrapper.css';
import NavBar from '../NavBar/NavBar.js';

const MovieWrapper = ({ movies, displayOneMovie, randomMovie, sortMovies }) => {
  let movieCard = movies.map(movie => {
    const {
      average_rating: rating,
      backdrop_path: backDrop,
      id,
      poster_path: poster,
      release_date: releaseDate,
      title
    } = movie;
    return (
      <div 
        className='movie-holder-div grow' 
        key={id}
      >
        <Link
          style={{
            textDecoration: 'none',
            color: 'inherit'
          }}
          to={`${id}`}
          className='link-wrapper'
        >
          <Movie
            rating={rating}
            backDrop={backDrop}
            id={id}
            poster={poster}
            releaseDate={releaseDate}
            title={title}
            displayOneMovie={displayOneMovie}
          />
        </Link>
      </div>
    );
  });

  return (
    <div className='all-wrapper'>
      <div>
        <section
          className='header-image'
          style={{
            backgroundImage: `url(${randomMovie.backdrop_path})`
          }}
        >
          <div className='gradient2'>
            <h1 className='random-movie-title'>{randomMovie.title}</h1>
            <Link to={`${randomMovie.id}`}>
              <button className='movie-details-button'>
                See Movie Details
              </button>
            </Link>
          </div>
        </section>
      </div>
      <NavBar sortMovies={sortMovies} />
      <section className='movie-wrapper'>{movieCard}</section>
    </div>
  );
};

export default MovieWrapper;
