import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { Carousel } from 'react-responsive-carousel';
// import ReactTooltip from 'react-tooltip';
// import Fade from 'react-reveal/Fade';
// import Slide from 'react-reveal/Slide';

// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Movie.css';

import Header from '../Header/Header';
import Footer from '../../components/Footer/Footer';
import JumpToTop from '../JumpToTop/JumpToTop';
import Spinner from '../Spinner/Spinner';

const Movie = () => {
  const {
    movieDetails: info,
    movieId,
    credits,
    reviews,
    videos
  } = useSelector(state => ({
    movieDetails: state.movieDetails,
    movieId: state.movieId,
    credits: state.credits,
    reviews: state.reviews,
    videos: state.videos
  }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   ReactTooltip.rebuild();
  // });

  const backdropSrc = 'https://image.tmdb.org/t/p/w1280';
  const posterSrc = 'https://image.tmdb.org/t/p/w342';
  const profileSrc = 'https://image.tmdb.org/t/p/w185';

  if (!info || info.id !== movieId) {
    return (
      <div>
        {/* <ReactTooltip effect="solid" className="tooltip" type="light" delayHide={100} /> */}
        <Header />
        <JumpToTop />
        <Spinner />
        <Footer />
      </div>
    );
  }

  const runtimeHour = Math.floor(info.runtime / 60);
  const runtimeMin = info.runtime % 60;

  const director = credits?.crew
    .filter(crew => crew.job === 'Director')
    .map(d => d.name)
    .join(', ');

  const cast = credits?.cast.slice(0, 5).map(c => (
    c.profile_path && (
      <div key={c.profile_path} className="castProfilePic">
        <img src={profileSrc + c.profile_path} alt={`Photo of ${c.name}`} data-tip={c.name} />
      </div>
    )
  ));

  const videoEmbeds = videos?.results.map(video => (
    // <Slide bottom key={video.id}>
      <div key={video.id}>
        <iframe
          title={video.name}
          width="544"
          height="306"
          src={`https://www.youtube-nocookie.com/embed/${video.key}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    // </Slide>
  ));

  const backdrops = info.images.backdrops.map(backdrop => (
    <img key={backdrop.file_path} src={backdropSrc + backdrop.file_path} alt={`Backdrop of ${info.title}`} />
  ));

  const reviewText = reviews?.results.length ? <div id="reviewText">Reviews</div> : null;

  const reviewContent = reviews?.results.map(review =>
    review.content && (
      // <Slide bottom key={review.id}>
        <div key={review.id}>
          <p>{`From ${review.author}:`}</p>
          <p>{review.content}</p>
        </div>
      // </Slide>
    )
  );

  return (
    <div>
      {/* <ReactTooltip effect="solid" className="tooltip" type="light" delayHide={100} /> */}
      <Header />
      <JumpToTop />

      <div className="grid">
        <div id="movieInfo">
          <div id="movieIntro">
            {/* <Fade> */}
              <div id="movieTitle">{info.title}</div>

              <div id="yearRuntimeRatingHomepage">
                <span id="year">{info.release_date.substring(0, 4)}</span>
                <div>{runtimeHour}h {runtimeMin}m</div>
                <div>
                  <i className="far fa-star fa-xs"></i>
                  {info.vote_average}
                  <span id="denominator"> / 10</span>
                </div>
                {info.homepage && (
                  <div>
                    <a
                      href={info.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-tip={`Homepage of "${info.title}"`}
                    >
                      <i id="homepageIcon" className="fas fa-link"></i>
                    </a>
                  </div>
                )}
              </div>
            {/* </Fade> */}
          </div>

          <div id="movieDetails">
            {/* <Fade> */}
              <div id="left">
                {info.poster_path
                  ? <img src={posterSrc + info.poster_path} alt={`Poster of "${info.title}"`} />
                  : <p>Poster of "{info.title}" not found</p>}
              </div>
            {/* </Fade> */}

            {/* <Fade> */}
              <div id="right">
                <p>{info.overview}</p>

                <div id="budgetRevenueContainer">
                  <p>Budget: $ {info.budget.toLocaleString()}</p>
                  <p>Revenue: $ {info.revenue.toLocaleString()}</p>
                </div>

                <div id="directorContainer">Directed by {director}</div>
                <div id="castContainer">{cast}</div>
              </div>
            {/* </Fade> */}
          </div>

          <div id="videoContainer">{videoEmbeds}</div>
        </div>
      </div>

      {info.images.backdrops?.length > 0 && (
        // <Carousel
        //   showIndicators={false}
        //   useKeyboardArrows
        //   infiniteLoop
        //   autoPlay
        //   interval={5000}
        // >
        //   {backdrops}
        // </Carousel>
        <></>
      )}

      <div className="grid">
        <div id="reviewInfo">
          {reviewText}
          {reviewContent}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Movie;