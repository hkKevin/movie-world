import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'

import './JumpToTop.css';

class JumpToTop extends Component {

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  render() {
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

    const toTopClicked = () => {
      window.scrollTo(0, 0);
    }


    return (
      <div>
        <ReactTooltip effect="solid" className='tooltip' type="light" />
        <i
          id='toTop'
          style={{ right: '20px', bottom: '-100px' }}
          className="fas fa-chevron-circle-up fa-2x overlayBtn"
          onClick={toTopClicked}
          data-tip='TOP'></i>
      </div>
    );
  }
}

export default JumpToTop;
