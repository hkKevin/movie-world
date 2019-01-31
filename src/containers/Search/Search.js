import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/action/index';

class Search extends Component {

  onInputChange = (event) => {
    // dispatch to redux action creator/reducer with value
    this.props.onSearchMovies(event.target.value);
    console.log(event.target.value);
  }

  render() {

    return (
      <section className='grid'>
        <input type='text' onChange={this.onInputChange} />
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
