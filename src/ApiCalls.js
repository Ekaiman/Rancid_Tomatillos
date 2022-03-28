const apiCalls = {
  fetchData() {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {
        console.log('response', response)
        console.log('status', response.status)
        return response.json()
      })
      .then(data => data)
      .catch(error => {
        console.log('err typeof', typeof error)
        console.log('err name', error.name)
        console.log('err msg', error.message)
        throw error
      })
  },

  fetchOneMovie(id) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        throw error
      })
  }
};

export default apiCalls;
