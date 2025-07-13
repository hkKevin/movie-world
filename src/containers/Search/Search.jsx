import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Fade from 'react-reveal/Fade';

import * as actions from '../../store/action/index';
import './Search.css';

const Search = () => {
  const searchText = useSelector(state => state.searchText);
  const dispatch = useDispatch();

  useEffect(() => {
    // Keep searchText in searchBox when returned from movie page
    const input = document.getElementsByName('searchBox')[0];
    if (input) {
      input.value = searchText;
    }
  }, [searchText]);

  const onInputChange = (event) => {
    dispatch(actions.searchMovies(event.target.value));
  };

  return (
    <div>
      <div className='search'>
        {/* <Fade> */}
          <div id='searchContainer'>
            <input
              id='searchBox'
              name='searchBox'
              type='search'
              onChange={onInputChange}
              placeholder='Movie Name...'
              autoFocus
            />
          </div>
        {/* </Fade> */}
      </div>
    </div>
  );
};

export default Search;