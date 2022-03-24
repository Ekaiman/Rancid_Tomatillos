// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import movieData from '../../movieData';
import MovieWrapper from '../MovieWrapper/MovieWrapper.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    };
  }

  render() {
    return (
      <div>
        <MovieWrapper movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
