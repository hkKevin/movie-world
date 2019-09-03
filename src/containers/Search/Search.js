import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slide from 'react-reveal/Slide';

import * as actions from '../../store/action/index';
import './Search.css';

class Search extends Component {

  componentDidMount() {
    // Keep searchText in searchBox when returned from movie page 
    document.getElementsByName('searchBox')[0].value = this.props.searchText;
  }

  onInputChange = (event) => {
    this.props.onSearchMovies(event.target.value);  // dispatch to redux action creator with userInput
    // console.log(event.target.value);
  }

  render() {

    return (
      <section>
        <div className='search'>
          <Slide top>
            <div id='searchContainer'>
              <span id='searchIcon' className="fas fa-search"></span>
              <input id='searchBox' name='searchBox' type='search' onChange={this.onInputChange} placeholder='Movie Name...' autoFocus />
            </div>
          </Slide>
        </div>
      </section>
    );
  }
};

const mapStateToProps = state => {
  return {
    searchText: state.searchText
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchMovies: (searchText) => dispatch(actions.searchMovies(searchText))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
