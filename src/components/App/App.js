// import logo from './logo.svg';
import './App.css';
import React, {Component} from "react"
import movieData from '../../movieData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <div>
        {/* <MoviesWrapper /> */}
      </div>
    )
  }

}

export default App;
