import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Box from './Box';
import CallToAction from './CallToAction';
import Credits from './Credits';

import Logo from '../assets/img/logo.svg';

class App extends Component {

  render() {
    const currentPath = window.location.pathname;
    let redirect = false;
    if (currentPath === '/credits') redirect = true;

    return (
      <div className="dashboard">
        <div id="modal-root" />
        <div className="dashboard__logo-container">
          <img className="dashboard__logo-image" src={Logo} alt="logo" />
        </div>
        {
          !redirect &&
          <Box>
            <CallToAction />
          </Box>
        }
        <Route
          path='/credits'
          render={props => (
            <Credits toggleButton={this.toggleButton} {...props} />
          )}
        />
      </div>
    );
  }
}

export default App;
