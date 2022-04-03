import React from 'react';
import Movie from '../Movie/Movie.js';
import { NavLink, Link } from 'react-router-dom';
import './MovieWrapper.css';
import NavBar from '../NavBar/NavBar.js';

const MovieWrapper = ({ movies, displayOneMovie, randomMovie, sortMovies }) => {
  console.log('>>>>>><<<<<<<', randomMovie);
  let movieCard = movies.map(movie => {
    const {
      average_rating: rating,
      backdrop_path: backDropPath,
      id,
      poster_path: posterPath,
      release_date: releaseDate,
      title
    } = movie;
    return (
      <div className='movie-holder-div grow'>
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
            backDropPath={backDropPath}
            id={id}
            posterPath={posterPath}
            releaseDate={releaseDate}
            title={title}
            key={id}
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
