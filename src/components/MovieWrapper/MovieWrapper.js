import React from 'react';
import Movie from '../Movie/Movie.js';
import { NavLink } from 'react-router-dom';

function MovieWrapper({ movies, displayOneMovie }) {
  return movies.map(movie => {
    const {
      average_rating: rating,
      backdrop_path: backDropPath,
      id,
      poster_path: posterPath,
      release_date: releaseDate,
      title
    } = movie;
    return (
      <NavLink to={`/movies/${id}`}>
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
}

export default MovieWrapper;
