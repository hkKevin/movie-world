import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'

import './JumpToTop.css';

class JumpToTop extends Component {

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  render() {
    // Activate jQuery in React
    const $ = window.$;

    $(window).scroll(function() {
      let height = $(window).scrollTop();
      if (height > 500) {
        $('#toTop').fadeIn();
      } else {
        $('#toTop').fadeOut();
      }
    });

    const toTopClicked = () => {
      window.scrollTo(0, 0);
    }


    return (
      <div>
        <ReactTooltip effect="solid" className='tooltip' type="light" />
        <i
          id='toTop'
          className="fas fa-chevron-circle-up fa-2x overlayBtn"
          onClick={toTopClicked}
          data-tip='TOP'></i>
      </div>
    );
  }
}

export default JumpToTop;
