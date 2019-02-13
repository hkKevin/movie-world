import React from 'react';

import './JumpToTop.css';

const jumpToTop = () => {

  let prevScrollPosition = window.pageYOffset;
  window.onscroll = () => {
    let currentScrollPosition = window.pageYOffset;
    if (document.getElementById('toTop')) {
      if (prevScrollPosition > currentScrollPosition) {
        // show:
        // console.log('show');
        document.getElementById('toTop').style.bottom = '20px';
      } else if (prevScrollPosition < currentScrollPosition) {
        // hide:
        document.getElementById('toTop').style.bottom = '-100px';
      }
      prevScrollPosition = currentScrollPosition;
    }
  }

  return (
      <a href='#top'>
        <i id='toTop' style={{ right: '20px', bottom: '-100px' }} className="far fa-arrow-alt-circle-up fa-2x"></i>
      </a>
  );
}

export default jumpToTop;
