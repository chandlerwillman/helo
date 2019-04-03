import React, { Component } from 'react';
import './App.css';

import { withRouter } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Routes from './routes';

class App extends Component {

  render() {
    return (
      <div className="App">
        {this.props.location.pathname != '/' ? <Nav /> : ''}
        {Routes}
      </div>
    )
  }
}

export default withRouter(App);
