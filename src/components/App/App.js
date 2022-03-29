import './App.css';
import React, { Component } from 'react';
import MovieWrapper from '../MovieWrapper/MovieWrapper.js';
import MovieDetail from '../MovieDetail/MovieDetail';
import apiCalls from '../../ApiCalls';
import ErrorHandling from '../ErrorHandling/ErrorHandling';
import { Route, NavLink } from 'react-router-dom';

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
    // this.setState({ movieClicked: false });
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
        <Route exact path='/movies' render={() =>
          <MovieWrapper
            movies={this.state.movies}
            displayOneMovie={this.displayOneMovie}
          />}
        />

        <Route exact path='/movies/:movieId'
          render={({ match }) => {
            console.log('match', match)
            // const movieToRender = this.state.movies.find(movie => movie.id === parseInt(match.params.movieId))
            // console.log('movie to render', movieToRender)
            return (
              <MovieDetail
                movieId={match.params.movieId}
                returnToMain={this.returnToMain}
              />
            )
          }}
        />
      </div>
    )
  }
}

export default App;

// <Route exact path='/movies/:movieId'
//   render={({ match }) => {
//     console.log(match)
//     return (<MovieDetail
//       movieId={this.state.selectedMovieId}
//       returnToMain={this.returnToMain}
//       />)
//   }}
// />



// return (
//   <div className='main-background'>
//     {this.state.movieClicked && (
//       <MovieDetail
//         movieId={this.state.selectedMovieId}
//         returnToMain={this.returnToMain}
//       />
//     )}
//     {!this.state.movieClicked && (
//       <MovieWrapper
//         movies={this.state.movies}
//         displayOneMovie={this.displayOneMovie}
//       />
//     )}
//     {this.state.error && (
//       <ErrorHandling
//         error={this.state.error}
//       />
//     )}
//   </div>
// );
