import React, { Component } from 'react';
import './MovieDetail.css';
import apiCalls from '../../ApiCalls';
import { Route, Link } from 'react-router-dom';
import ErrorHandling from '../ErrorHandling/ErrorHandling';
import WrongPath
 from '../WrongPath/WrongPath';
class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  componentDidMount() {
    const { movieId } = this.props;
    apiCalls
      .fetchData(movieId)
      .then(data => {
        this.props.updateSelectedMovie(data.movie);
      })
      .catch(error => {
        console.log(error.message, 'ERRORRRRR')
        if (
          error.message === '404'
        ) {
          console.log('IT WORKED')
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
    const { backdrop_path, poster_path, release_date, overview, title, id } =
      this.props.selectedMovie;
      if(!this.state.error){
        return (
          <section className='movie-detail-background'>
            <div
              className='movieDetail'
              style={{
                backgroundImage: `url(${backdrop_path})`
              }}
            >
              <div className='gradient'>
                <Link to='/'>
                  <button
                    className='view-all-movies-button'
                    onClick={this.props.clearSelectedMovie}
                  >
                    View All Movies
                  </button>
                </Link>
    
                <Link to={`/${id}/videos`}>
                  <button className='view-all-movies-button'>
                    View Movie Trailer
                  </button>
                </Link>
    
                <section className='title-poster'>
                  <img
                    className='poster'
                    src={poster_path}
                    alt={`movie poster for ${title}`}
                  />
                  <div className='text-wrapper'>
                    <h1>{title}</h1>
                    <h2 className='release-date'>Released: {release_date}</h2>
                    <h2 className='rating'>
                      Average rating:{' '}
                      {Math.round(this.props.selectedMovie.average_rating)}
                      <span className='fa-solid fa-star'></span>
                    </h2>
                    <h2 className='overview'> {overview}</h2>
                  </div>
                </section>
              </div>
    
            </div>
          </section>
        )
        
    } else {
          return (
            <section>
              {this.state.error === '404' && <Route component={WrongPath} />}
              {this.state.error ===
                'Sorry our team is working on resolving this issue' && (
                <ErrorHandling error={this.state.error} />
              )}
            </section>
          );


      }
  }
}

export default MovieDetail;
