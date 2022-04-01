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
        console.log('response', response)
        console.log('status', response.status)
        return response.json()
      })
  }
};

export default apiCalls;