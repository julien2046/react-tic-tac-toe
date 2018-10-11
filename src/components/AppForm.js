import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';

class AppForm extends Component {

  componentDidMount() {

    setTimeout(() => {
      if (this.firstInput) {
        this.firstInput.focus();
      }
    }, 1000)
  }

  render() {
    return (
      <div className='app-form'>
				<div>
					<Input name='palyer-1' label='Player 1' type='text' refName={el => this.firstInput = el} />
				</div>

				<div>
					<Input name='player-2' label='Player 2' type='text' />
				</div>

				<div>
					<Button>Start!</Button>
				</div>
			</div>
    );
  }
}

export default AppForm;
