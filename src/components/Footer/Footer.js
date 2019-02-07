import React from 'react';

import './Footer.css'

const footer = () => (
  <div className='grid'>
    <div id='footer'>
      <div id='tmdb'>
        <a href='https://www.themoviedb.org/' target='_blank' rel='noopener noreferrer'>
          <img
            src='https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png'
            alt='Logo of The Movie DataBase'
            width='130' />
        </a>
        <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
      </div>
      <div id='myself'>
        <p>Developed by 
          <a href='https://github.com/hkKevin' target='_blank' rel='noopener noreferrer' title='GitHub'>
            <span id='myName'> Pak Kiu Leung</span>
          </a>
        </p>
        <a href="https://github.com/hkKevin/movie-world" target="_blank" rel='noopener noreferrer' title='GitHub Repository'>
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  </div>
);

export default footer; 