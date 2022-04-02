import React, { Component } from 'react';
import './MovieTrailer.css'
import { Link } from 'react-router-dom';
import apiCalls from '../../ApiCalls';

class MovieTrailer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: []
    }
  }

  componentDidMount() {
    const { movieId } = this.props;
    console.log('mount movie trailer movieId', movieId)
    
    apiCalls.fetchMovieTrailer(movieId)
      .then(data => {
        console.log('movie trailer data', data)
        return this.setState({ videos: data.videos })
      })
      .catch(error => {
        console.log('caught err for movie trailer video');
        this.setState({ error: 'Sorry our team is working on resolving this issue' });
      });
  }

  render() {
    const { movieId } = this.props;
    return(
      <section className='movie-trailer-section'>
        <div className='movie-trailer-container'>
          
            <div className='btn-container'>
              <Link to='/'>
                <button className='view-btn'>View All Movies</button>
              </Link>
              <Link to={`/${movieId}`} >
                <button className='view-btn'>View Movie Details</button>

              </Link>
            </div>
            <h1 className='movie-trailer-title'>Movie Title</h1>
          
          <div className='img-container'>
            <img className='movie-trailer-poster'
              src='https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg'
              alt='movie poster'
            />

            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/IpSK2CsKULg" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>
    )
  }
}

export default MovieTrailer;