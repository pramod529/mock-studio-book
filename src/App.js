import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import HomePage from './container/HomePage';
import LoginPage from './container/LoginPage';

class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route exact path="/dashboard" component={HomePage}/>
       </Switch>
      </Router> 
    );
  }
}

export default App;
