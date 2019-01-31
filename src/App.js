import React, { Component } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Search from './containers/Search/Search';
import Movies from './containers/Movies/Movies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Movies />
      </div>
    );
  }
}

export default App;
