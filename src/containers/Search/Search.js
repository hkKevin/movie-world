import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/action/index';
import './Search.css';

class Search extends Component {

  onInputChange = (event) => {
    this.props.onSearchMovies(event.target.value);  // dispatch to redux action creator with userInput
    console.log(event.target.value);
  }

  render() {

    return (
      <section>
        <div className='search'>
          <div id='searchContainer'>
            <span id='searchIcon' className="fas fa-search"></span>
            <input id='searchBox' type='search' onChange={this.onInputChange} placeholder='Search...' />
          </div>
        </div>
      </section>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchMovies: (searchText) => dispatch(actions.searchMovies(searchText))
  };
}

export default connect(null, mapDispatchToProps)(Search);
