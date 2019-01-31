import React from 'react';

import './Movie.css';

const movie = (props) => {
  const imgSrc = 'https://image.tmdb.org/t/p/w185';
  return (
    <div className='movie'>
      {/* <p className='movie-title'>{props.title}</p> */}
      <img src={imgSrc + props.poster} title={props.title} alt={'Poster of "' + props.title + '"'} />
    </div>
  );
};

export default movie;