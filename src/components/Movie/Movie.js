import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel, Collapsible, CollapsibleItem } from 'react-materialize';

import './Movie.css';
import Header from '../Header/Header';

class Movie extends Component {
  render() {
    const backdropSrc = 'https://image.tmdb.org/t/p/w780';
    const posterSrc = 'https://image.tmdb.org/t/p/w342';
    const profileSrc = 'https://image.tmdb.org/t/p/w185'

    let movieInfo = null;
    if (this.props.info) {  // If movie details found...
      if (this.props.info.id === this.props.movieId) {  // If new movie details loaded...
        const runtimeHour = Math.floor(this.props.info.runtime / 60);
        const runtimeMin = this.props.info.runtime % 60;

        let cast = null;
        if (this.props.credits) {
          cast = (
            this.props.credits.cast.slice(0, 5).map(cast => {
              return (
                cast.profile_path
                  ? (
                    <div key={cast.profile_path} className='castProfilePic'>
                      <img src={profileSrc + cast.profile_path} alt={'Photo of ' + cast.name} title={cast.name} />
                    </div>
                  )
                  : null
              );
            })
          );
        }

        let reviewText = null;
        let reviews = null;
        if (this.props.reviews) {
          if (this.props.reviews.results.length !== 0) {
            reviewText = <div id='reviewText'>Reviews:</div>
          } 
          
          reviews = (
            this.props.reviews.results.map(review => {
              return (
                review.content
                  ? (
                    <CollapsibleItem key={review.id} header={'From ' + review.author + ':'}>
                        <p>{review.content}</p>
                    </CollapsibleItem>
                  )
                  : null
              );
            })
          );
        }

        movieInfo = (
          <div className='grid'>
            <div id='movieDetails'>
              <div id='movieIntro'>
                <div id='left'>
                  <div id='movieTitle'>
                    {this.props.info.title}
                  </div>
                  <div id='yearRuntimeRating'>
                    <span id='year'>{this.props.info.release_date.substring(0, 4)}</span>
                    <div>
                      {runtimeHour}h {runtimeMin}m
                    </div>
                    <div>
                      <i className="far fa-star fa-xs"></i>
                      {this.props.info.vote_average}
                      <span id='denominator'> / 10</span>
                      {/* <span id='voteCount'> ({this.props.info.vote_count})</span> */}
                    </div>
                  </div>

                  {/* <p>Movie ID: {this.props.info.id}</p> */}
                  <p>{this.props.info.overview}</p>
                  <p>Budget: {this.props.info.budget}</p>
                  <p>Revenue: {this.props.info.revenue}</p>

                  <div id='castContainer'>
                    {cast}
                  </div>

                </div>

                <div id='right'>
                  {this.props.info.poster_path
                    ? <img src={posterSrc + this.props.info.poster_path} title={this.props.info.title} alt={'Poster of "' + this.props.info.title + '"'} />
                    : <p>Poster of "{this.props.info.title}" not found</p>}
                </div>

              </div>


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

              <div>
                {reviewText}
                <Collapsible accordion defaultActiveKey={0}>
                  {reviews}
                </Collapsible>
              </div>

            </div>
          </div>
        );
      } else {
        movieInfo = 'LOADING...';
      }


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
    info: state.movieDetails,
    movieId: state.movieId,
    credits: state.credits,
    reviews: state.reviews
  };
};

export default connect(mapStateToProps, null)(Movie);