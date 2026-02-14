import axios from 'axios';

// Action Creators:

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_BASE;

let fetchedMovies = [];
let hasResult = false;
let searchFinished = false;
let totalResults = 0;
let totalPages = 0;
let currentPage = 1;

export const searchMovies = (searchText, abortSignal) => {

  return async dispatch => {
    // Return when user enter nothing
    dispatch(searchMoviesStart());
    if (searchText === null || searchText === '') {
      fetchedMovies = [];
      hasResult = false;
      searchFinished = true;
      totalResults = 0;
      dispatch(searchMoviesFail(fetchedMovies, hasResult, searchFinished, totalResults, searchText));
      return;
    }

    try {
      const pages = [1, 2, 3]
      const requests = pages.map(page => 
        axios.get(
          `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`,
          { signal: abortSignal }
        )
      );
      
      let responses = await Promise.all(requests);
      const allResults = responses.flatMap(r => r.data.results);
      const filtered = allResults
        .filter(movie => 
          movie.popularity >= 5 && 
          movie.vote_count >= 50
        )
        .sort((a, b) => b.popularity - a.popularity)

      // Remove duplicated movie
      const fetchedMovies = Array.from(new Map(filtered.map(film => [film.id, film])).values())

      if (fetchedMovies.length === 0) {
        hasResult = false;
        searchFinished = true;
        const totalResults = 0;
        dispatch(searchMoviesFail(fetchedMovies, hasResult, searchFinished, totalResults, searchText));
      } else {
        hasResult = true;
        totalResults = fetchedMovies.length;
        totalPages = filtered.total_pages;
        currentPage = filtered.page;
        searchFinished = true;
        dispatch(searchMoviesSuccess(fetchedMovies, hasResult, searchText, totalResults, totalPages, currentPage, searchFinished));
      }
      
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Search canceled:', error.message);
        // Don't dispatch error for canceled requests
        return;
      }
      console.error('Unexpected error:', error.message);
      const fetchedMovies = [];
      const hasResult = false;
      const searchFinished = true;
      const totalResults = 0;
      dispatch(searchMoviesFail(fetchedMovies, hasResult, searchFinished, totalResults, searchText));
    }
  };
};

// export const searchMovies = (searchText, abortSignal) => {

//   return dispatch => {
//     // Return when user enter nothing
//     dispatch(searchMoviesStart());
//     if (searchText === null || searchText === '') {
//       fetchedMovies = [];
//       hasResult = false;
//       searchFinished = true;
//       totalResults = 0;
//       dispatch(searchMoviesFail(fetchedMovies, hasResult, searchFinished, totalResults, searchText));
//       return;
//     }

//     axios.get(`${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=`
//     + searchText + '&page=' + currentPage + '&include_adult=false', {
//       signal: abortSignal
//     })
//     .then(response => {
//       fetchedMovies = [];
//       for (let key in response.data.results) {
//         fetchedMovies.push(response.data.results[key])
//       }
//       if (fetchedMovies.length === 0) {
//         hasResult = false;
//         searchFinished = true;
//         dispatch(searchMoviesFail(fetchedMovies, hasResult, searchFinished, totalResults, searchText));
//       } else {
//         hasResult = true;
//         totalResults = response.data.total_results;
//         totalPages = response.data.total_pages;
//         currentPage = response.data.page;
//         searchFinished = true;
//         dispatch(searchMoviesSuccess(fetchedMovies, hasResult, searchText , totalResults, totalPages, currentPage, searchFinished));
//       }
//     })
//     .catch(error => {
//       console.error(error);
//       dispatch(searchMoviesFail(fetchedMovies, hasResult, searchFinished, totalResults, searchText));
//     })
//   };
// };

export const searchMoviesStart = () => {
  return {
    type: 'SEARCH_MOVIES_START'
  };
};

export const searchMoviesSuccess = (fetchedMovies, hasResult, searchText, totalResults, totalPages, currentPage, searchFinished) => {
  return {
    type: 'SEARCH_MOVIES_SUCCESS',
    movies: fetchedMovies,
    hasResult: hasResult,
    searchText: searchText,
    totalResults: totalResults,
    totalPages: totalPages,
    currentPage: currentPage,
    searchFinished: searchFinished
  };
};

export const searchMoviesFail = (fetchedMovies, hasResult, searchFinished, totalResults, searchText) => {
  return {
    type: 'SEARCH_MOVIES_FAIL',
    movies: fetchedMovies,
    hasResult: hasResult,
    searchFinished: searchFinished,
    totalResults: totalResults,
    searchText: searchText
  };
};

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
        const details = await axios.get(`${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&include_adult=false&language=en-US&append_to_response=images&include_image_language=en,null`);
        dispatch(selectMovieSuccess(details.data));
      } catch (error) {
        console.error(error);
      }
    }

    async function getMovieCredits() {
      try {
        const credits = await axios.get(`${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}`);
        dispatch(getCreditsSuccess(credits.data));
      } catch (error) {
        console.error(error);
      }
    }

    async function getVideos() {
      try {
        const videos = await axios.get(`${BASE_URL}/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`);
        dispatch(getVideosSuccess(videos.data));
      } catch (error) {
        console.error(error);
      }
    }

    async function getMovieReviews() {
      try {
        const reviews = await axios.get(`${BASE_URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
        dispatch(getReviewsSuccess(reviews.data));
      } catch (error) {
        console.error(error);
      }
    }

    // Triggering async. HTTP Requests
    getMovieDetails();
    getMovieCredits();
    getVideos();
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

export const getVideosSuccess = (videos) => {
  return {
    type: 'GET_VIDEOS_SUCCESS',
    videos: videos
  };
};



export const getReviewsSuccess = (reviews) => {
  return {
    type: 'GET_REVIEWS_SUCCESS',
    reviews: reviews
  };
};


// export const selectPage = (page, searchText) => {
//   return dispatch => {
//     dispatch(selectPageStart());
//     fetchedMovies = [];
//     hasResult = false;
//     totalResults = 0;
//     totalPages = 0;
//     axios.get(`${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=`
//       + searchText + '&page=' + page + '&include_adult=false')
//       .then(response => {
//         for (let key in response.data.results) {
//           fetchedMovies.push(response.data.results[key])
//         }

//         if (fetchedMovies.length === 0) {
//           hasResult = false;
//           searchFinished = true;
//           totalResults = 0;
//           totalPages = 0;
//           currentPage = 1
//           dispatch(selectPageFail(fetchedMovies, currentPage));
//         } else {
//           currentPage = response.data.page;
//           dispatch(selectPageSuccess(fetchedMovies, currentPage));
//           hasResult = true;
//           totalResults = response.data.total_results;
//           totalPages = response.data.total_pages;
//         }
//       })
//       .catch(error => {
//         console.error(error);
//         dispatch(selectPageFail(fetchedMovies, currentPage));
//       })
//   };
// };

// export const selectPageStart = () => {
//   return {
//     type: 'SELECT_PAGE_START'
//   }
// }

// export const selectPageFail = () => {
//   return {
//     type: 'SELECT_PAGE_FAIL'
//   }
// }

// export const selectPageSuccess = (fetchedMovies, currentPage) => {
//   window.scrollTo(0, 0);
//   return {
//     type: 'SELECT_PAGE_SUCCESS',
//     movies: fetchedMovies,
//     currentPage: currentPage
//   };
// }
