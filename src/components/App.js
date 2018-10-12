import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Box from './Box';
import CallToAction from './CallToAction';
import Credits from './Credits';
import Board from './Board';

import Logo from '../assets/img/logo.svg';

class App extends Component {

  state = {
    credits: []
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=10')
      .then(res => {
        this.setState({credits: res.data.results})
    });
  }

  render() {
    const currentPath = window.location.pathname;
    let redirect = false;
    if (currentPath === '/credits' || currentPath === '/game') redirect = true;

    const { credits } = this.state;

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
        <Switch>
          <Route
            path='/credits'
            render={props => (
              <Credits credits={credits} toggleButton={this.toggleButton} {...props} />
            )}
          />
          <Route
            path='/game'
            render={props => (
              <Board {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
