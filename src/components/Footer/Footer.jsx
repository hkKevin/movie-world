// import React, { useEffect } from 'react';
// import ReactTooltip from 'react-tooltip';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
// import Fade from 'react-reveal/Fade';
import { Fade } from "react-awesome-reveal";

import './Footer.css';

const Footer = () => {
  // useEffect(() => {
  //   Tooltip.rebuild();
  // });

  return (
    <div className='grid'>
      <Tooltip id='api-tooltip' className="tooltip"/>
      <Tooltip id='github-tooltip' className="tooltip"/>
      <div id='footer'>
        <div id='tmdb'>
          <a href='https://www.themoviedb.org/' target='_blank' rel='noopener noreferrer'>
            <img
              src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
              alt='Logo of The Movie DataBase'
              width='40'
              data-tooltip-id='api-tooltip'
              data-tooltip-content='The Movie DataBase'
              data-tooltip-place='top'
              data-tooltip-delay-hide={100}
              data-tooltip-variant='light'
            />
          </a>
          <p>This application uses the TMDb API but is not endorsed or certified by TMDb.</p>
        </div>
        <div id='myself'>
          <Fade bottom triggerOnce>
            <p>
              Developed by&nbsp;
              <a href='https://github.com/hkKevin' target='_blank' rel='noopener noreferrer'>
                <span id='myName' data-tip='GitHub Profile'>Pak Kiu (Kevin) Leung</span>
              </a>
            </p>
          </Fade>
          <a href='https://github.com/hkKevin/movie-world' target='_blank' rel='noopener noreferrer'>
            <i 
              className='fab fa-github fa-2x' 
              data-tooltip-id='github-tooltip'
              data-tooltip-content='GitHub Repository'
              data-tooltip-place='top'
              data-tooltip-delay-hide={100}
              data-tooltip-variant='light'
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;