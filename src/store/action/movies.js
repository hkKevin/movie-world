import axios from 'axios';

// Action Creators:

export const searchMovies = (searchText) => {

  return dispatch => {
    if (searchText === null || searchText === '') { return; }   // Return when user enter nothing
    const fetchedMovies = [];
    let hasResult = false;
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=34af8294dab051e0d2dc34894beac01c&language=en-US&query='
      + searchText + '&page=1&include_adult=false')
      .then(response => {
        for (let key in response.data.results) {
          fetchedMovies.push(response.data.results[key])
        }
        if (fetchedMovies.length === 0) {
          dispatch(searchMoviesSuccess(fetchedMovies, hasResult, searchText));
        } else {
          hasResult = true;
          dispatch(searchMoviesSuccess(fetchedMovies, hasResult));
        }
        console.log(fetchedMovies);
      })
      .catch(error => {
        console.error(error);
      })
  };
};

export const searchMoviesSuccess = (fetchedMovies, hasResult, searchText) => {
  return {
    type: 'SEARCH_MOVIES_SUCCESS',
    movies: fetchedMovies,
    hasResult: hasResult,
    searchText: searchText
  };
}

export const setMovieId = (movieId) => {
  return {
    type: 'SET_MOVIE_ID',
    movieId: movieId
  };
}

export const selectMovie = (movieId) => {
  return dispatch => {
    if (movieId === null || movieId === '') { return; }   // Return when movieId not found
    dispatch(setMovieId(movieId));

    async function getMovieDetails() {
      try {
        const details = await axios.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=34af8294dab051e0d2dc34894beac01c&language=en-US&append_to_response=images&include_image_language=en,null');
        dispatch(selectMovieSuccess(details.data));
      } catch (error) {
        console.error(error);
      }
    }

    async function getMovieCredits() {
      try {
        const credits = await axios.get('https://api.themoviedb.org/3/movie/' + movieId + '/credits?api_key=34af8294dab051e0d2dc34894beac01c');
        dispatch(getCreditsSuccess(credits.data));
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    async function getMovieReviews() {
      try {
        const reviews = await axios.get('https://api.themoviedb.org/3/movie/'+ movieId +'/reviews?api_key=34af8294dab051e0d2dc34894beac01c&language=en-US&page=1');
        dispatch(getReviewsSuccess(reviews.data));
        console.log(reviews.data);
      } catch (error) {
        console.error(error);
      }
    }

    // Triggering async. HTTP Requests
    getMovieDetails();
    getMovieCredits();
    getMovieReviews();

    // The normal approach for HTTP Request
    // axios.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=34af8294dab051e0d2dc34894beac01c&language=en-US&append_to_response=images&include_image_language=en,null')
    //   .then(response => {
    //     console.log(response.data);
    //     dispatch(selectMovieSuccess(response.data))
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   })
  };
};

export const selectMovieSuccess = (movieDetails) => {
  return {
    type: 'SELECT_MOVIE_SUCCESS',
    movieDetails: movieDetails
  };
};

export const getCreditsSuccess = (credits) => {
  return {
    type: 'GET_CREDITS_SUCCESS',
    credits: credits
  };
};

export const getReviewsSuccess = (reviews) => {
  return {
    type: 'GET_REVIEWS_SUCCESS',
    reviews: reviews
  };
};



