import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import Results from './containers/Results/Results';
import Movie from './components/Movie/Movie';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/movie-world" element={<Navigate to="/movie-world/" replace />} />
        <Route path="/movie-world/" element={<Results />} />
        {/* <Route path="/movie-world/movie/:movieID" element={<Movie />} /> */}
        <Route path="/movie-world/movie/:movieID" element={<Movie />} />
        <Route path="/movie-world/movie/:movieID/:movieSlug" element={<Movie />} />
        <Route path="*" element={<Navigate to="/movie-world" replace />} />
      </Routes>
    </div>
  );
};

export default App;