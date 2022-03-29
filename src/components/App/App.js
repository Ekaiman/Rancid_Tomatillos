import './App.css';
import React, { Component } from 'react';
import MovieWrapper from '../MovieWrapper/MovieWrapper.js';
import MovieDetail from '../MovieDetail/MovieDetail';
import apiCalls from '../../ApiCalls';
import ErrorHandling from '../ErrorHandling/ErrorHandling';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      selectedMovieId: null,
      movieClicked: false,
      error: null
    };
  }

  displayOneMovie = id => {
    console.log('clicked id', id);
    this.setState({ movieClicked: true, selectedMovieId: id })
  };

  returnToMain = () => {
    this.setState({ movieClicked: false });
  };

  componentDidMount() {
    apiCalls
      .fetchData()
      .then(data => this.setState({ movies: data.movies }))
      .catch(error => {
        console.log('caught err for ALL MOVIES')
        this.setState({ error: 'Sorry our team is working on resolving this issue' })
      })
  }

  render() {
    return (
      <div className='main-background'>
        {this.state.movieClicked && (
          <MovieDetail
            movieId={this.state.selectedMovieId}
            returnToMain={this.returnToMain}
          />
        )}
        {!this.state.movieClicked && (
          <MovieWrapper
            movies={this.state.movies}
            displayOneMovie={this.displayOneMovie}
          />
        )}
        {this.state.error && (
          <ErrorHandling
            error={this.state.error}
          />
        )}
      </div>
    );
  }
}

export default App;
