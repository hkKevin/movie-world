import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel } from "react-responsive-carousel";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import ReactTooltip from 'react-tooltip'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import 'react-accessible-accordion/dist/fancy-example.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Movie.css';
import Header from '../Header/Header';
import Footer from '../../components/Footer/Footer';
import JumpToTop from '../JumpToTop/JumpToTop';
import GoBack from '../GoBack/GoBack';
import Spinner from '../Spinner/Spinner';

class Movie extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  render() {

    const backdropSrc = 'https://image.tmdb.org/t/p/w1280';
    const posterSrc = 'https://image.tmdb.org/t/p/w342';
    const profileSrc = 'https://image.tmdb.org/t/p/w185'

    let movieInfo = null;
    if (this.props.info) {  // If movie details found...
      if (this.props.info.id === this.props.movieId) {  // If new movie details loaded...
        const runtimeHour = Math.floor(this.props.info.runtime / 60);
        const runtimeMin = this.props.info.runtime % 60;

        let director = null;
        const directorArr = [];
        // Get director name(s)
        if (this.props.credits) {
          this.props.credits.crew.map(crew => {
            if (crew.job === 'Director') {
              directorArr.push(' ' + crew.name)
            }
            return null;
          });
          director = directorArr
        }

        let cast = null;
        // Get the first 5 casts
        if (this.props.credits) {
          cast = (
            this.props.credits.cast.slice(0, 5).map(cast => {
              return (
                cast.profile_path
                  ? (
                    <div key={cast.profile_path} className='castProfilePic'>
                      <img src={profileSrc + cast.profile_path} alt={'Photo of ' + cast.name} data-tip={cast.name} />
                    </div>
                  )
                  : null
              );
            })
          );
        }

        let videos = null;
        // Get YouTube videos
        if (this.props.videos) {
          videos = (
            this.props.videos.results.map(video => {
              return (
                <Slide bottom key={video.id}>
                  <iframe
                    title='video'
                    width="544" height="306"
                    src={'https://www.youtube-nocookie.com/embed/' + video.key}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                  </iframe>
                </Slide>
              );
            })
          );
        }

        let backdrops = null;
        // Get backdrops (16:9 poster)
        if (this.props.info) {
          backdrops = (
            this.props.info.images.backdrops.map(backdrop => {
              return (
                <img key={backdrop.file_path} src={backdropSrc + backdrop.file_path} alt={'Backdrop of ' + this.props.info.title} />
                // <img src={backdropSrc + backdrop.file_path} />
              );
            })
          );
        }

        let reviewText = null;
        let reviews = null;
        if (this.props.reviews) {
          if (this.props.reviews.results.length !== 0) {
            reviewText = <div id='reviewText'>Reviews</div>
          }

          
          // Get reviews
          reviews = (
            this.props.reviews.results.map(review => {
              return (
                review.content
                  ? (
                    <Slide bottom key={review.id}>
                      <AccordionItem>
                        <AccordionItemTitle>
                          <p>{'From ' + review.author + ':'}</p>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                          <p>{review.content}</p>
                        </AccordionItemBody>
                      </AccordionItem>
                    </Slide>
                  )
                  : null
              );
            })
          );
        }

        movieInfo = (
          <div>
            <div className='grid'>
              <div id='movieInfo'>
                <div id='movieIntro'>
                  <Fade>
                    <div id='movieTitle'>
                      {this.props.info.title}
                    </div>

                    <div id='yearRuntimeRatingHomepage'>
                      <span id='year'>{this.props.info.release_date.substring(0, 4)}</span>
                      <div>
                        {runtimeHour}h {runtimeMin}m
                    </div>
                      <div>
                        <i className="far fa-star fa-xs"></i>
                        {this.props.info.vote_average}
                        <span id='denominator'> / 10</span>
                      </div>

                      <div>
                        {this.props.info.homepage
                          ? <a href={this.props.info.homepage} target='_blank' rel='noopener noreferrer' data-tip={'Homepage of "' + this.props.info.title + '"'}><i id='homepageIcon' className="fas fa-link"></i></a>
                          : null}
                      </div>

                    </div>
                  </Fade>
                </div>

                <div id='movieDetails'>
                  <Fade>
                    <div id='left'>
                      {this.props.info.poster_path
                        ? <img src={posterSrc + this.props.info.poster_path} alt={'Poster of "' + this.props.info.title + '"'} />
                        : <p>Poster of "{this.props.info.title}" not found</p>}
                    </div>
                  </Fade>

                  <Fade>
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
                  </Fade>
                </div>

                <div id='videoContainer'>
                  {videos}
                </div>

              </div>
            </div>


            {this.props.info.images.backdrops
              ? <Carousel
                showIndicators={false}
                useKeyboardArrows={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}>
                {backdrops}</Carousel>
              : null
            }

            <div className='grid'>
              <div id='movieInfo'>

                <div>
                  {reviewText}
                  <Accordion accordion={false}>
                    {reviews}
                  </Accordion>
                </div>

              </div>
            </div>

          </div>
        );
      } else {
        movieInfo = (
          <Spinner />
        );
      }

    } else {
      movieInfo = (
        <Spinner />
      );
    }


    return (
      <div>
        <ReactTooltip effect="solid" className='tooltip' type="light" delayHide={100} />
        <Header />
        <GoBack />
        <JumpToTop />
        {movieInfo}
        <Footer />
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