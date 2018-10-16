import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

import Box from './Box';
import CallToAction from './CallToAction';
import Credits from './Credits';
import Game from './Game';

import Logo from '../assets/img/logo.svg';

class App extends Component {

  state = {
    credits: []
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=100')
      .then(res => {
        this.setState({credits: res.data.results})
    });
  }

  setPlayers = data => {
    const playersData = [...data];
    this.setState({players: playersData});
  }

  render() {
    const { credits, players } = this.state;

    const currentPath = window.location.pathname;
    let redirect = false;
    let className = '';
    if (currentPath === '/credits' || currentPath === '/game') redirect = true;
    if (currentPath === '/game') className = 'game-scene';


    return (
      <div className={`dashboard ${className}`}>
        <div id="modal-root" />
        <header className="dashboard__logo-container">
          <Link to="/"><img className="dashboard__logo-image" src={Logo} alt="logo" /></Link>
        </header>
        {
          !redirect &&
          <Box>
            <CallToAction setPlayers={this.setPlayers} />
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
              <Game players={players} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
