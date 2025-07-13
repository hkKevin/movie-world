import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import './GoBack.css';

const GoBack = () => {
  const navigate = useNavigate();

  useEffect(() => {
    ReactTooltip.rebuild();
  });

  const goBackClicked = () => {
    navigate(-1); // equivalent to history.goBack()
  };

  return (
    <div>
      <ReactTooltip effect="solid" className="tooltip" type="light" />
      <i
        id="goBack"
        onClick={goBackClicked}
        style={{ left: '20px', bottom: '20px' }}
        className="fas fa-arrow-circle-left fa-2x overlayBtn"
        data-tip="BACK"
      ></i>
    </div>
  );
};

export default GoBack;