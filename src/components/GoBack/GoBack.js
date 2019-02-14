import React, { Component } from 'react';
import { withRouter } from 'react-router'
import ReactTooltip from 'react-tooltip'

import './GoBack.css';

class GoBack extends Component {

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  goBackClicked = () => {
    this.props.history.goBack();
  }

  render() {

    return (
      <div>
        <ReactTooltip effect="solid" className='tooltip' type="light" />
        <i 
          id='goBack' 
          onClick={this.goBackClicked} 
          style={{ left: '20px', bottom: '20px' }} 
          className="fas fa-arrow-circle-left fa-2x overlayBtn"
          data-tip='BACK' >
        </i>
        
      </div>
    );
  }
}

export default withRouter(GoBack);
