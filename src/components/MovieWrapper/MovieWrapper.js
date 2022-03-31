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
      <NavLink
        style={{
          textDecoration: 'none',
          color: 'inherit'
        }}
        to={`${id}`}
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
      </NavLink>
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
        <Link to={`${randomImg.id}`}>
        
        <div className='gradient2'>
          <h1>{randomImg.title}</h1>
          <h2></h2>
        </div>
        </Link>
      <section className='movie-wrapper'>{movieCard}</section>
      </section>
    </div>
  );
};

export default MovieWrapper;
