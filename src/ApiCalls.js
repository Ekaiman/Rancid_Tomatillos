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
        if (response.ok) {
          return response.json()
        } else if (response.status === 404) {
          throw new Error('404')
        } else {
          console.log(response);
          throw new Error(`An error occured: status ${response.status}`);
        }
      })
  }
};

export default apiCalls;