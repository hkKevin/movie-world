import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'
import Fade from 'react-reveal/Fade';

import './Footer.css'

class Footer extends Component {

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  render() {
    return (
      <div className='grid'>
        <ReactTooltip effect="solid" className='tooltip' type="light" delayHide={100} />
        <div id='footer'>
          <div id='tmdb'>
            <a href='https://www.themoviedb.org/' target='_blank' rel='noopener noreferrer'>
              <img
                src='https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png'
                alt='Logo of The Movie DataBase'
                width='100'
                data-tip='The Movie DataBase' />
            </a>
            <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
          </div>
          <div id='myself'>
            <Fade bottom>
              <p>Developed by
              <a href='https://github.com/hkKevin' target='_blank' rel='noopener noreferrer'>
                  <span id='myName' data-tip='GitHub Profile'> Pak Kiu Leung</span>
                </a>
              </p>
            </Fade>
            <a href="https://github.com/hkKevin/movie-world" target="_blank" rel='noopener noreferrer'>
              <i className="fab fa-github fa-2x" data-tip='GitHub Repository'></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}


export default Footer; 