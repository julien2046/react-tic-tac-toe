import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Button from './Button';
import Input from './Input';

class AppForm extends Component {

  state = {
    redirect: false,
    placeholder: ''
  }

  componentDidMount() {

    setTimeout(() => {
      if (this.firstInput) {
        this.firstInput.focus();
      }
    }, 1000)
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({[name]: value});
  }


  startGame = event => {
    event.preventDefault();

    const playerOne = this.state.player1;
    const playerTwo = this.state.player2;
    const valid = playerTwo && playerOne ? true : false;

    const players = [playerOne, playerTwo];

    const { setPlayers = f => f } = this.props;


    if (valid) {
      setPlayers(players);
      this.setState({ redirect: true });
    } else {
      this.setState({placeholder: 'Please enter a name'});
    }
  }


  render() {
    const { redirect, value, placeholder } = this.state;

    if (redirect) {
      return <Redirect push to='/game'/>;
    }

    return (
      <div className='app-form'>
				<div>
					<Input
            name='player1'
            label='X Player 1'
            type='text'
            value={value}
            onChange={this.handleChange}
            refName={el => this.firstInput = el}
            placeholder={placeholder}
          />
				</div>

				<div>
					<Input
            name='player2'
            label='O Player 2'
            type='text'
            value={value}
            onChange={this.handleChange}
            placeholder={placeholder}
          />
				</div>

				<div>
					 <Button handleClick={e => this.startGame(e)}>Start!</Button>
				</div>
			</div>
    );
  }
}

export default AppForm;
