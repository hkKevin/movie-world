import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import Results from './containers/Results/Results';
import Movie from './components/Movie/Movie';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/movie-world/movie" element={<Movie />} />
        <Route path="/movie-world" element={<Results />} />
        <Route path="*" element={<Navigate to="/movie-world" replace />} />
      </Routes>
    </div>
  );
};

export default App;