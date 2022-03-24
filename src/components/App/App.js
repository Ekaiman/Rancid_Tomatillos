// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import movieData from '../../movieData';
import MovieWrapper from '../MovieWrapper/MovieWrapper.js';
import MovieDetail from '../MovieDetail/MovieDetail';
import apiCalls from '../../ApiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: [],
      movieClicked: false
    };
  }

  displayOneMovie = id => {
    console.log('clicked', id);
    const foundMovie = this.state.movies.find(movie => movie.id === id);
    this.setState({ selectedMovie: foundMovie, movieClicked: true });
  };

  returnToMain = () => {
    this.setState({ movieClicked: false });
  };

  componentDidMount() {
    
    apiCalls.fetchData().then(data => this.setState({ movies: data.movies }));
  }

  render() {
    return (
      <div>
        {this.state.movieClicked && (
          <MovieDetail
            movie={this.state.selectedMovie}
            returnToMain={this.returnToMain}
          />
        )}
        {!this.state.movieClicked && (
          <MovieWrapper
            movies={this.state.movies}
            displayOneMovie={this.displayOneMovie}
          />
        )}
      </div>
    );
  }
}

export default App;
