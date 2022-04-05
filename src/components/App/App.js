import './App.css';
import React, { Component } from 'react';
import MovieWrapper from '../MovieWrapper/MovieWrapper.js';
import MovieDetail from '../MovieDetail/MovieDetail';
import apiCalls from '../../ApiCalls'
import { Route, Switch } from 'react-router-dom';
import MovieTrailer from '../MovieTrailer/MovieTrailer';
import WrongPath from '../WrongPath/WrongPath';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: {},
      selectedMovieId: false,
      error: '',
      randomMovie: {}
    };
  }

  displayOneMovie = id => {
    this.setState({ selectedMovieId: id });
  };

  sortMovies = type => {
    if (type === 'rating') {
      const sorted = this.state.movies.sort(
        (a, b) => b.average_rating - a.average_rating
      );
      this.setState({ movies: sorted });
    } else if (type === 'alphabetically') {
      const sorted = this.state.movies.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      this.setState({ movies: sorted });
    }
  };

  updateSelectedMovie = movie => {
    this.setState({ selectedMovie: movie });
  };

  clearSelectedMovie = () => {
    this.setState({ selectedMovie: {} });
  };

  componentDidMount() {
    apiCalls
      .fetchData()
      .then(data => {
        this.setState({
          movies: data.movies,
          randomMovie:
            data.movies[Math.floor(Math.random() * data.movies.length)]
        });
      })
      .catch(error => {
        if (error.message === '404') {
          this.setState({
            error: '404'
          });
        } else {
          this.setState({
            error: 'Sorry our team is working on resolving this issue'
          });
        }
      });
  }

  render() {
    return (
      <main className='main'>
        <header className='title'>Rancid Tomatillos</header>
        <Switch>
          <Route
            exact
            path='/'
            style={{
              textDecoration: 'none'
            }}
            render={() => (
              <MovieWrapper
                movies={this.state.movies}
                displayOneMovie={this.displayOneMovie}
                randomMovie={this.state.randomMovie}
                sortMovies={this.sortMovies}
              />
            )}
          />
          <Route
            exact
            path='/:movieId'
            render={({ match }) => {
              return (
                <MovieDetail
                  movieId={match.params.movieId}
                  updateSelectedMovie={this.updateSelectedMovie}
                  selectedMovie={this.state.selectedMovie}
                  clearSelectedMovie={this.clearSelectedMovie}
                />
              );
            }}
          />
          <Route
            exact
            path='/:movieId/videos'
            render={({ match }) => {
              return (
                <MovieTrailer
                  movieId={match.params.movieId}
                  selectedMovie={this.state.selectedMovie}
                  clearSelectedMovie={this.clearSelectedMovie}
                />
              );
            }}
          />
          <Route component={WrongPath} />
          
        </Switch>
      </main>
    );
  }
}

export default App;
