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
      selectedMovie: [],
      movieClicked: false,
      error: null
    };
  }

  // displayOneMovie = id => {
  //   console.log('clicked', id);
  //   const foundMovie = this.state.movies.find(movie => movie.id === id);
  //   this.setState({ selectedMovie: foundMovie, movieClicked: true });
  // };
  displayOneMovie = id => {
    apiCalls
      .fetchOneMovie(id)
      .then(data =>
        this.setState({ selectedMovie: data.movie, movieClicked: true })
      );
  };

  returnToMain = () => {
    this.setState({ movieClicked: false });
  };

  componentDidMount() {
    apiCalls
      .fetchData()
      .then(data => this.setState({ movies: data.movies }))
      .catch(error => {
        // console.log(error.response)
        if (error) {
        // if (error.status >= 500) {
          this.setState({
            error: 'Sorry our team is working on resolving this issue'
          });
        }
      });
  }

  render() {
    return (
      <div className='main-background'>
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
