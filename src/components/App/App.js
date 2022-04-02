import './App.css';
import React, { Component } from 'react';
import MovieWrapper from '../MovieWrapper/MovieWrapper.js';
import MovieDetail from '../MovieDetail/MovieDetail';
import apiCalls from '../../ApiCalls';
import ErrorHandling from '../ErrorHandling/ErrorHandling';
import { Route } from 'react-router-dom';

import MovieTrailer from '../MovieTrailer/MovieTrailer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovieId: null,
      error: false,
      randomImg: false
    };
  }

  displayOneMovie = id => {
    console.log('clicked id', id);
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

  componentDidMount() {
    apiCalls
      .fetchData()
      .then(data => {
        this.setState({
          movies: data.movies,
          randomImg: data.movies[Math.floor(Math.random() * data.movies.length)]
        });
        // console.log(
        //   data.movies[Math.floor(Math.random() * data.movies.length)]
        // );
        // console.log(this.state.randomImg);
      })
      .catch(error => {
        console.log('caught err for ALL MOVIES', error);
        this.setState({
          error: 'Sorry our team is working on resolving this issue'
        });
      });
  }

  render() {
    return (
      <main className='main'>
        <header className='title'>Rancid Tomatillos</header>
        <section className='movie-holder'>
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
                randomImg={this.state.randomImg}
                sortMovies={this.sortMovies}
              />
            )}
          />
        </section>

        <Route
          exact
          path='/:movieId'
          render={({ match }) => {
            console.log('match', match);
            return <MovieDetail movieId={match.params.movieId} />;
          }}
        />

        <Route
          exact path='/:movieId/video'
          render={({ match }) => {
            console.log('match', match);
            return <MovieTrailer movieId={match.params.movieId} />;
          }}
        />

        {this.state.error && <ErrorHandling error={this.state.error} />}
      </main>
    );
  }
}

export default App;
