import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-materialize';

import './Movie.css';
import Header from '../Header/Header';

class Movie extends Component {
  render() {
    const backdropSrc = 'https://image.tmdb.org/t/p/w780';
    const posterSrc = 'https://image.tmdb.org/t/p/w342';

    // document.addEventListener('DOMContentLoaded', function() {
    //   var elems = document.querySelectorAll('.carousel');
    //   var instances = M.Carousel.init(elems, options);
    // });

    let movieInfo = null;
    if (this.props.info) {

      const runtimeHour = Math.floor(this.props.info.runtime / 60);
      const runtimeMin = this.props.info.runtime % 60;

      movieInfo = (
        <div className='grid'>
          <div id='movieDetails'>

            <p id='movieTitle'>{this.props.info.title} <span id='year'>({this.props.info.release_date.substring(0, 4)})</span></p>
            {/* <p>Movie ID: {this.props.info.id}</p> */}
            {this.props.info.poster_path
              ? <img src={posterSrc + this.props.info.poster_path} title={this.props.info.title} alt={'Poster of "' + this.props.info.title + '"'} />
              : <p>Poster of "{this.props.info.title}" not found</p>}
            <p>{this.props.info.overview}</p>
            <p>Revenue: {this.props.info.revenue}</p>
            <p>Runtime: {runtimeHour}h {runtimeMin}m</p>
            <p>Vote Avg.: {this.props.info.vote_average}</p>
            <p>Vote Count: {this.props.info.vote_count}</p>

            <Carousel
              options={{ 
                fullWidth: true,
                indicators: true,
                duration: 300,
                noWrap: true
              }}
              images={this.props.info.images.backdrops.map(backdrop => {
                return backdropSrc + backdrop.file_path;
              })} />


            {/* {this.props.info.images.backdrops.map(backdrop => {
            return (
              <div key={backdrop.file_path}>
                <a
                  href={imgSrc + backdrop.file_path}
                  target='_blank'
                  rel="noopener noreferrer">
                  <img src={imgSrc + backdrop.file_path} alt='backdrop' />
                </a>
              </div>

            );
          })} */}
          </div>
        </div>
      );
    } else {
      movieInfo = 'Movie Details not found.';
    }


    return (
      <div>
        <Header />
        {movieInfo}
      </div>
    );
  }


};

export const mapStateToProps = state => {
  return {
    info: state.movieDetails
  };
};

export default connect(mapStateToProps, null)(Movie);