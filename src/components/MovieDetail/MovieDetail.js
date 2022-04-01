import React, { Component } from 'react';
import './MovieDetail.css';
import apiCalls from '../../ApiCalls';
import { Link } from 'react-router-dom';
import ErrorHandling from '../ErrorHandling/ErrorHandling';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: false,
      error: false
    };
  }

  componentDidMount() {
    console.log('calling single movie api', this.props);
    const { movieId } = this.props;
    console.log('movieId', movieId);
    apiCalls
      .fetchData(movieId)
      .then(data => this.setState({ selectedMovie: data.movie }))
      .catch(error => {
        console.log('caught err for single movie');
        this.setState({
          error: 'Sorry our team is working on resolving this issue'
        });
      });
  }

  roundAverage() {
    if (this.state.selectedMovie){

      console.log(this.state.selectedMovie.average_rating);
     return this.state.selectedMovie.average_rating.toFixed(2)
    }
  }

  render() {
    console.log('rendering movie');
    const { backdrop_path, poster_path, release_date, overview, title } = this.state.selectedMovie;
    return (
      <section className='movie-detail-background'>
        <div
          className='movieDetail'
          style={{
            backgroundImage: `url(${backdrop_path})`
          }}
        >
          {!this.state.error && (
            <div className='gradient'>
              <Link to='/'>
                <button className='view-all-movies-button'>
                  View All Movies
                </button>
              </Link>
              <section className='title-poster'>
                <img className='poster' src={poster_path} />
                <div className='text-wrapper'>
                  <h1>{title}</h1>
                  <h2 className='release-date'>
                    Released: {release_date}
                  </h2>
                  <h2 className='rating'>
                    Average rating: {this.roundAverage()}
                  </h2>
                  <h2 className='overview'> {overview}</h2>
                </div>
              </section>
            </div>
          )}

          {this.state.error && <ErrorHandling error={this.state.error} />}
        </div>
      </section>
    );
  }
}

export default MovieDetail;
