import React from 'react';
import Movie from '../Movie/Movie.js';
import { NavLink, Link } from 'react-router-dom';
import './MovieWrapper.css';

const MovieWrapper = ({ movies, displayOneMovie, randomImg }) => {
  console.log('>>>>>><<<<<<<', randomImg);
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
      <div className='movie-holder-div'>
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
    <div>
      <section
        className='header-image'
        style={{
          backgroundImage: `url(${randomImg.backdrop_path})`
        }}
      >
        <div className='gradient2'>
          <h1 className='random-movie-title'>{randomImg.title}</h1>
          <Link to={`${randomImg.id}`}>
            <button className='movie-details-button'>See Movie Details</button>
          </Link>
        </div>
        {/* <div className='gradient3'></div> */}
        <section className='movie-wrapper'>{movieCard}</section>
      </section>
    </div>
  );
};

export default MovieWrapper;
