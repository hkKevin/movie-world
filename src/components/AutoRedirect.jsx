import React, { useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const AutoRedirect = () => {
  const location = useLocation();

  useEffect(() => {
    // Redirect if URL ends without a trailing slash and isn't the root "/"
    const path = location.pathname;
    // console.log('^ location', path)
    if (path === '/movie-world') {
      // window.location.replace('/movie-world/');
      <Navigate to="/movie-world/" replace />
    }
  }, [location]);

  return null; // No UI needed
};

export default AutoRedirect
