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
    console.log('movie trailer state', this.state)
    const { movieId } = this.props;
    const { backdrop_path, poster_path, title } = this.props.selectedMovie;
    console.log(!this.state.videos.length)
    
    if (!this.state.videos.length) {
      return <p>No Trailer Found</p>
    } else {
      return (
        <section className='movie-trailer-section'>
          <div 
            className='movie-trailer-container'
            style={{ backgroundImage: `url(${backdrop_path})` }}
          >
            <div className='gradient'>
              <div className='btn-container'>
                <Link to='/'>
                  <button className='view-btn'>View All Movies</button>
                </Link>
                <Link to={`/${movieId}`} >
                  <button className='view-btn'>View Movie Details</button>
                </Link>
              </div>
              <h1 className='movie-trailer-title'>{title}</h1>

              <div className='img-container'>
                <img className='movie-trailer-poster'
                  src={poster_path}
                  alt={`movie poster for ${title}`}
                />

                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${this.state.videos[0].key}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                >
                </iframe>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default MovieTrailer;