import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

import './GoBack.css';

const GoBack = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        event.preventDefault()
        goBackClicked()
      }
    }
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])
  
  const goBackClicked = () => {
    //navigate(-1); // equivalent to history.goBack()
      navigate(`/movie-world/`);
  };

  return (
    <div>
      <Tooltip id='jump-tooltip' className="tooltip" positionStrategy='fixed' />
      <i
        id="goBack"
        onClick={goBackClicked}
        className="fas fa-arrow-circle-left fa-2x overlayBtn"
        data-tooltip-id='api-tooltip'
        data-tooltip-content='Back'
        data-tooltip-place='bottom'
        data-tooltip-delay-hide={100}
        data-tooltip-variant='light'
        data-tooltip-position-strategy = 'fixed'
      ></i>
    </div>
  );
};

export default GoBack;