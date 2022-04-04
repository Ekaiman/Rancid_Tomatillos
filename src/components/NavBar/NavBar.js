import React from 'react';
import Movie from '../Movie/Movie.js';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

function NavBar({ sortMovies }) {
  return (
    <nav className='sort-bar'>
      <div className='abc holder' onClick={() => sortMovies('alphabetically')}>
        <p className='sort'></p>
        <p>Sort A-Z</p>
      </div>
      <div className='holder' onClick={() => sortMovies('rating')}>
        <p className='sort'></p>
        <p>Sort by Highest Rating</p>
      </div>
    </nav>
  );
}

export default NavBar;
