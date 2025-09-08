import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as actions from '../../store/action/index';
import { selectMovieData } from '../movieSelector';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from 'swiper/modules';

import { Tooltip } from 'react-tooltip';
import { Fade } from "react-awesome-reveal";

import './Movie.css';

import Header from '../Header/Header';
import Footer from '../../components/Footer/Footer';
import JumpToTop from '../JumpToTop/JumpToTop';
import Spinner from '../Spinner/Spinner';
import GoBack from '../GoBack/GoBack';

const Movie = () => {
  const {
    movieDetails: info,
    movieId,
    credits,
    reviews,
    videos
  } = useSelector(selectMovieData);

  let { movieID } = useParams();
  const dispatch = useDispatch();

  movieID = Number(movieID)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!movieID || isNaN(movieID)) return

    if (movieId !== movieID) {
      dispatch(actions.selectMovie(movieID));
    }
  }, [movieId, movieID, dispatch]);

  const backdropSrc = 'https://image.tmdb.org/t/p/w1280';
  const posterSrc = 'https://image.tmdb.org/t/p/w342';
  const profileSrc = 'https://image.tmdb.org/t/p/w185';

  if (!info || info.id !== movieId) {
    return (
      <div>
        <Header />
        <GoBack />
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
        <img 
          src={profileSrc + c.profile_path} 
          alt={`Photo of ${c.name}`} 
          data-tooltip-id='actor-tooltip' 
          data-tooltip-content={c.name} 
          data-tooltip-place='top'
          data-tooltip-delay-hide={100}
          data-tooltip-variant='light'
        />
      </div>
    )
  ));

  const videoEmbeds = videos?.results.slice(0, 12).map(video => (
    <Fade triggerOnce key={video.id}>
      <iframe
        title={video.name}
        width="544"
        height="306"
        src={`https://www.youtube-nocookie.com/embed/${video.key}?loading=lazy`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </Fade>
  ));

  const backdrops = info?.images?.backdrops?.map(backdrop => (
    <SwiperSlide key={backdrop.file_path}>
      <img 
        key={backdrop.file_path} 
        src={backdropSrc + backdrop.file_path} 
        alt={`Backdrop of ${info.title}`} 
        loading='lazy'
      />
      <div className="swiper-lazy-preloader"></div>
    </SwiperSlide>
  ));


  return (
    <div>
      <Header />
      <GoBack />
      <JumpToTop />
      <Tooltip id='link-tooltip' className='tooltip' />
      <Tooltip id='actor-tooltip' className='tooltip' />

      <div className="grid">
        <div id="movieInfo">
          <div id="movieIntro">
            <Fade>
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
                      className='homepage-link'
                      target="_blank"
                      rel="noopener noreferrer"
                      data-tooltip-id='link-tooltip' 
                      data-tooltip-content={`Homepage of "${info.title}"`} 
                      data-tooltip-place='top'
                      data-tooltip-delay-hide={100}
                      data-tooltip-variant='light'
                    >
                      <i id="homepageIcon" className="fas fa-link"></i>
                    </a>
                  </div>
                )}
              </div>
            </Fade>
          </div>

          <div id="movieDetails">
            <Fade>
              <div id="left">
                {info.poster_path
                  ? <img src={posterSrc + info.poster_path} alt={`Poster of "${info.title}"`} />
                  : <p>Poster of "{info.title}" not found</p>}
              </div>
            </Fade>

            <Fade>
              <div id="right">
                <p>{info.overview}</p>

                <div id="budgetRevenueContainer">
                  <p>Budget: $ {info.budget.toLocaleString()}</p>
                  <p>Revenue: $ {info.revenue.toLocaleString()}</p>
                </div>

                <div id="directorContainer">Directed by {director}</div>
                <div id="castContainer">{cast}</div>
              </div>
            </Fade>
          </div>

          <div id="videoContainer">
            {videoEmbeds}
          </div>
        </div>
      </div>

      {info?.images?.backdrops?.length > 0 && (
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={{
              type: 'fraction',
            }}
            loop={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            grabCursor
            className="backdropSwiper"
          >
            {backdrops}
          </Swiper>
      )}

      <div className="grid">
        <div id="reviewInfo">
          {reviews?.results.length 
            ? <div id="reviewTitle">
                Review{reviews?.results.length > 1 ? 's' : ''} <span style={{color: 'var(--gray-200)', marginLeft: '5px'}}>{reviews?.results?.length}</span>
              </div> 
            : null}
          {reviews?.results.map(review =>
            review?.content && (
                <div className='reviewItem' key={review.id}>
                  <div className='reviewItemInfo'>{`${review.author}   •   ${new Date(review.created_at).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}`}</div>
                  <p className='reviewContent'>{review.content}</p>
                </div>
            )
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Movie;