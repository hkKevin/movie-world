// Action Reducer:

const initialState = {
  movies: [],
  searchText: "",
  totalResults: 0,
  totalPages: 0,
  currentPage: 0,
  searchFinished: false,
  movieDetails: null,
  movieId: null,
  credits: null,
  reviews: null,
  videos: null,
  loading: false
}

const movies = (state = initialState, action) => {

  switch ( action.type ) {

    case 'SEARCH_MOVIES_START':
      return {
        ...state,
        loading: true
      };
    
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.movies,
        hasResult: action.hasResult,
        searchText: action.searchText,
        totalResults: action.totalResults,
        totalPages: action.totalPages,
        currentPage: action.currentPage,
        searchFinished: action.searchFinished,
        loading: false
      };
    
    case 'SEARCH_MOVIES_FAIL':
      return {
        ...state,
        movies: action.movies,
        hasResult: action.hasResult,
        searchText: action.searchText,
        totalResults: action.totalResults,
        searchFinished: action.searchFinished,
        loading: false
      };

    case 'SELECT_MOVIE_SUCCESS':
      return {
        ...state,
        movieDetails: action.movieDetails
      }

    case 'SET_MOVIE_ID':
      return {
        ...state,
        movieId: action.movieId
      }
      
    case 'GET_CREDITS_SUCCESS':
      return {
        ...state,
        credits: action.credits
      }

    case 'GET_VIDEOS_SUCCESS':
      return {
        ...state,
        videos: action.videos
      }

    case 'GET_REVIEWS_SUCCESS':
      return {
        ...state,
        reviews: action.reviews
      }

    case 'SELECT_PAGE_START':
      return {
        ...state,
        loading: true
      };

    case 'SELECT_PAGE_SUCCESS':
      return {
        ...state,
        movies: action.movies,
        currentPage: action.currentPage,
        loading: false
      };
    
    case 'SELECT_PAGE_FAIL':
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
  
}

export default movies;