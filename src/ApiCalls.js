const apiCalls = {
  fetchData(movieId, showVideos = false) {
    let path;

    if(!movieId) {
      path = 'movies'
    } else if(showVideos) {
      path = `movies/${movieId}/videos`
    } else {
      path = `movies/${movieId}`
    }

    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`)
      .then(response => {
        console.log(response)
        return response.json()
      })
  },
};

export default apiCalls;