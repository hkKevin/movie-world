import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const header = () => {
  return (
    <header className='grid header'>
      <Link to='/'><p>Movie World</p></Link>
    </header>
  );
}

export default header;
