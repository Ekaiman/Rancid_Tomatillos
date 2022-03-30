import React, { Component } from 'react';
import './MovieDetail.css';
import apiCalls from '../../ApiCalls';
import { Link } from 'react-router-dom';
import ErrorHandling from '../ErrorHandling/ErrorHandling';

class MovieDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMovie: {},
      error: false
    }
  }

  componentDidMount() {
    console.log("calling single movie api", this.props)
    const { movieId } = this.props
    console.log('movieId', movieId)
    apiCalls
      .fetchOneMovie(movieId)
      .then(data =>
        this.setState({ selectedMovie: data.movie })
      )
      .catch(error => {
        console.log('caught err for single movie')
        this.setState({ error: 'Sorry our team is working on resolving this issue' })
      })
  }

  render() {
    console.log('rendering movie')
    const { selectedMovie: movie } = this.state
      return (
        <div
          className='movieDetail'
          style={{
            backgroundImage: `url(${movie.backdrop_path})`
          }}
        >
          {!this.state.error && <div className='gradient'>
            
            <Link to='/'>
              <button className='view-all-movies-button'>
              View All Movies
              </button>
            </Link>
            {/* <img className='back-drop' src={movie.backdrop_path} /> */}
            <section className='title-poster'>
              <img className='poster' src={movie.poster_path} />
              <div className='text-wrapper'>
                <h1>{movie.title}</h1>
                <h2 className='release-date'>Released: {movie.release_date}</h2>
                <h2 className='rating'>Average rating: {movie.average_rating}</h2>
                <h2 className='overview'> {movie.overview}</h2>
              </div>
            </section>
          </div>
          }

          {this.state.error && (
            <ErrorHandling
              error={this.state.error}
            />
          )}
        </div>
      );

  }
}


export default MovieDetail;
