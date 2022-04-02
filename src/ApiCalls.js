const apiCalls = {
  fetchData(movieId) {
    let path;

    if(!movieId) {
      path = 'movies'
    } else {
      path = `movies/${movieId}`
    }

    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`)
      .then(response => {
        console.log(response)
        return response.json()
      })
  },

  fetchMovieTrailer(movieId) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}/videos`)
      .then(response => {
        console.log('movie trailer res', response)
        return response.json()
      })
  }
};

export default apiCalls;