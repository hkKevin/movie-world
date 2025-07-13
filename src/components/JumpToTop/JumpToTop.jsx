import React, { useEffect, useState } from 'react';
// import ReactTooltip from 'react-tooltip';

import './JumpToTop.css';

const JumpToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   ReactTooltip.rebuild();
  // });

  const toTopClicked = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* <ReactTooltip effect="solid" className="tooltip" type="light" /> */}
      {showButton && (
        <i
          id="toTop"
          className="fas fa-chevron-circle-up fa-2x overlayBtn"
          onClick={toTopClicked}
          data-tip="TOP"
          style={{ position: 'fixed', right: '20px', bottom: '20px', cursor: 'pointer', zIndex: 1000 }}
        ></i>
      )}
    </>
  );
};

export default JumpToTop;