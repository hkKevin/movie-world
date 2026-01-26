import React from 'react';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';

import './App.css';
import Results from './containers/Results/Results';
import Movie from './components/Movie/Movie';

const App = () => {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Results />} />
          <Route path="/movie/:movieID" element={<Movie />} />
          <Route path="/movie/:movieID/:movieSlug" element={<Movie />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;