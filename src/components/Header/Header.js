import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const header = () => {
  return (
    <header className='grid header'>
      <Link to='/'><h1>Movie World</h1></Link>
    </header>
  );
}

export default header;
