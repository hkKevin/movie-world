import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

import './App.css';
import Results from './containers/Results/Results';
import Movie from './components/Movie/Movie';


class App extends Component {
  
  render() {

    let routes = (
      <Switch>
        <Route path='/movie-world/movie' component={Movie} />
        <Route path='/movie-world/' exact component={Results} />
        <Redirect to='/movie-world/' />
      </Switch>
    );

    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
