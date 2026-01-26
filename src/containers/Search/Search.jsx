import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fade } from "react-awesome-reveal";
import { Tooltip } from "react-tooltip";

import * as actions from "../../store/action/index";
import "./Search.css";

const Search = () => {
  const searchText = useSelector((state) => state.searchText);
  const dispatch = useDispatch();
  const abortControllerRef = useRef(null);
  // const [searchTerm, setSearchTerm] = useState('')
  const [searchTerm, setSearchTerm] = useState(searchText)

  // useEffect(() => {
  //   // Keep searchText in searchBox when returned from movie page
  //   const input = document.getElementsByName("searchBox")[0];
  //   if (input) {
  //     input.value = searchText;
  //   }
  // }, [searchText]);

  useEffect(() => {
    // Prevent fetching movie results when navigating back from the movie page
    if (searchText === searchTerm) {
      // abortControllerRef.current?.abort();
      return;
    }

    // Debounce: wait 500ms before searching
    const timeoutId = setTimeout(() => {
      // Abort previous request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      if (!searchTerm.trim()) {
        dispatch(actions.searchMovies(searchTerm, abortControllerRef.current?.signal));
        return;
      }

      abortControllerRef.current = new AbortController();
      
      dispatch(actions.searchMovies(searchTerm, abortControllerRef.current?.signal));

    }, 500)

    return () => {
      clearTimeout(timeoutId)
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    }
  }, [searchTerm, dispatch]);
  // }, [searchTerm]);

  const clearSearch = () => {
    setSearchTerm('')
    dispatch(actions.searchMovies(""))
  }

  return (
    <div>
      <Tooltip id="clear-tooltip" className="tooltip" />
      <div className="search-wrapper">
        <Fade>
          <div id="searchContainer">
            <input
              id="searchBox"
              key='movieSearch'
              name="searchBox"
              type="search"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              placeholder="Enter movie name"
              autoFocus
            />
            {searchText && (
              <button
                type="button"
                onClick={clearSearch}
                data-tooltip-id="clear-tooltip"
                data-tooltip-content="Clear"
                data-tooltip-place="right"
                data-tooltip-delay-hide={100}
                data-tooltip-variant="light"
              >
                &times;
              </button>
            )}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Search;
