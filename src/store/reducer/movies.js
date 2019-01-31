// Action Reducer:

const initialState = {
  movies: []
}

const movies = (state = initialState, action) => {

  switch ( action.type) {
    
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.movies
      };

    default:
      return state;
  }
  
}

export default movies;