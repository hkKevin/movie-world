import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapsible, CollapsibleItem } from 'react-materialize';
// import { Carousel } from "react-responsive-carousel";

// import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Movie.css';
import Header from '../Header/Header';
// import Slideshow from 'react-slidez';

class Movie extends Component {

  render() {

    let prevScrollPosition = window.pageYOffset;
    window.onscroll = () => {
      let currentScrollPosition = window.pageYOffset;
      if (document.getElementById('toTop')) {
        if (prevScrollPosition > currentScrollPosition) {
          // show
          console.log('show');
          document.getElementById('toTop').style.bottom = '20px';
        } else if (prevScrollPosition < currentScrollPosition) {
          // hide
          document.getElementById('toTop').style.bottom = '-100px';
        }
        prevScrollPosition = currentScrollPosition;
      }

    }


    const backdropSrc = 'https://image.tmdb.org/t/p/w780';
    const posterSrc = 'https://image.tmdb.org/t/p/w342';
    const profileSrc = 'https://image.tmdb.org/t/p/w185'

    let movieInfo = null;
    if (this.props.info) {  // If movie details found...
      if (this.props.info.id === this.props.movieId) {  // If new movie details loaded...
        const runtimeHour = Math.floor(this.props.info.runtime / 60);
        const runtimeMin = this.props.info.runtime % 60;

        let director = null;
        const directorArr = [];
        if (this.props.credits) {
          this.props.credits.crew.map(crew => {
            if (crew.job === 'Director') {
              directorArr.push(' ' + crew.name)
            }
          });
          director = directorArr
        }

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

        let videos = null;
        if (this.props.videos) {
          videos = (
            this.props.videos.results.map(video => {
              return (
                <iframe
                  key={video.id}
                  title='video'
                  // width="560" height="315"
                  width="544" height="306"
                  src={'https://www.youtube-nocookie.com/embed/' + video.key}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              );
            })
          );
        }

        let backdrops = null;
        if (this.props.info) {
          backdrops = (
            this.props.info.images.backdrops.map(backdrop => {
              return (
                <img key={backdrop.file_path} src={backdropSrc + backdrop.file_path} alt={'Backdrop of ' + this.props.info.title} />
              );
              // return backdropSrc + backdrop.file_path;
            })
          );
        }

        let bdArr = [];
        if (this.props.info) {
          this.props.info.images.backdrops.map(backdrop => {
            return (
              bdArr.push(backdropSrc + backdrop.file_path)
            );
          })
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
            <div id='movieInfo'>
              <div id='movieIntro'>
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
                  </div>
                </div>
              </div>

              <div id='movieDetails'>
                <div id='left'>
                  {this.props.info.poster_path
                    ? <img src={posterSrc + this.props.info.poster_path} title={this.props.info.title} alt={'Poster of "' + this.props.info.title + '"'} />
                    : <p>Poster of "{this.props.info.title}" not found</p>}
                </div>

                <div id='right'>
                  <p>{this.props.info.overview}</p>

                  <div id='budgetRevenueContainer'>
                    <p>Budget: $ {this.props.info.budget.toLocaleString()}</p>
                    <p>Revenue: $ {this.props.info.revenue.toLocaleString()}</p>
                  </div>

                  <div id='directorContainer'>
                    {'Directed by ' + director}
                  </div>

                  <div id='castContainer'>
                    {cast}
                  </div>

                </div>
              </div>

              <div id='videoContainer'>
                {videos}
              </div>




              {/* <div id='bdContainer'>
              <div id='backdrop'>
                <Carousel>
                  {backdrops}
                </Carousel>
              </div>
            </div> */}



              <div>
                {reviewText}
                <Collapsible defaultActiveKey={0}>
                  {reviews}
                </Collapsible>
              </div>

            </div>
          </div>

        );
      } else {
        movieInfo = (
          <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        );
      }

    } else {
      movieInfo = (
        <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      );
      // movieInfo = 'Movie Details not found.';
    }


    return (
      <div>
        <Header />
        <a href='#top'>
          <i id='toTop' style={{ right: '20px', bottom: '-100px' }} className="far fa-arrow-alt-circle-up fa-2x"></i>
        </a>
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
    reviews: state.reviews,
    videos: state.videos
  };
};

export default connect(mapStateToProps, null)(Movie);