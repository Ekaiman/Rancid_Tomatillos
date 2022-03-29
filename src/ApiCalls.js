const apiCalls = {
  fetchData() {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {
        console.log('response', response)
        console.log('status', response.status)
        return response.json()
      })
  },

  fetchOneMovie(id) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
  }
};

export default apiCalls;
