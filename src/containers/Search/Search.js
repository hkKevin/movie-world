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
      <section className='grid'>
        <div id='search-input'>
          <input type='text' onChange={this.onInputChange} placeholder='Search...'/>
        </div>
      </section>
    );
  }
};

const mapStateToProps = state => {
  return {

  };
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchMovies: (searchText) => dispatch(actions.searchMovies(searchText))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
