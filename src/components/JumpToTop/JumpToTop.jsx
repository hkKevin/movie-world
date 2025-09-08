import React, { useEffect, useRef } from 'react';
import { Tooltip } from 'react-tooltip';

import './JumpToTop.css';

const JumpToTop = () => {
  const jumpRef = useRef(null);
  const jumpTooltipRef = useRef(null)
  const btnHitRef = useRef(false);

  useEffect(() => {
    jumpRef.current.style.visibility = 'hidden'
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // console.log('window.scrollY', window.scrollY)
    // console.log('jumpRef.current', jumpRef.current)
    jumpRef.current.style.visibility = (window.scrollY > 500 && btnHitRef.current === false) ? 'visible' : 'hidden'
  };

  const toTopClicked = () => {
    btnHitRef.current = true
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.scrollY <= 500) {
      jumpRef.current.style.visibility = 'hidden'
    }
    setTimeout(() => {
      btnHitRef.current = false
    }, 500)
    
  };

  return (
    <>
      <Tooltip 
        id='jump-tooltip' 
        ref={jumpTooltipRef} 
        positionStrategy='fixed' 
        delayHide={0} 
        hidden={btnHitRef.current}
      />

      <i
        id="toTop"
        ref={jumpRef}
        className="fas fa-chevron-circle-up fa-2x overlayBtn"
        onClick={toTopClicked}
        data-tooltip-id='jump-tooltip'
        data-tooltip-content='Top'
        data-tooltip-place='top'
        data-tooltip-delay-hide={false}
        data-tooltip-variant='light'
        data-tooltip-position-strategy = 'fixed'
      ></i>
    </>
  );
};

export default JumpToTop;