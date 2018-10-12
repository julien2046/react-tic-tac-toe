import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Button from './Button';
import Input from './Input';

class AppForm extends Component {

  state = {
    redirect: false
  }

  componentDidMount() {

    setTimeout(() => {
      if (this.firstInput) {
        this.firstInput.focus();
      }
    }, 1000)
  }


  startGame = event => {
    event.preventDefault();
    this.setState({ redirect: true });

    // Vérifier ici que les inputs ne sont pas vide
  }


  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect push to='/game'/>;
    }

    return (
      <div className='app-form'>
				<div>
					<Input name='palyer-1' label='Player 1' type='text' refName={el => this.firstInput = el} />
				</div>

				<div>
					<Input name='player-2' label='Player 2' type='text' />
				</div>

				<div>
					 <Button handleClick={e => this.startGame(e)}>Start!</Button>
				</div>
			</div>
    );
  }
}

export default AppForm;
