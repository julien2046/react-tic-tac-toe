import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';
import AppForm from './AppForm';
import Modal from './Modal';


class CallToAction extends Component {

  state = {
    modalActive: false
  }

  showModal = () => {

    this.setState({
      modalActive: true
    })
  }

  closeModal = () => {
    this.setState({
      modalActive: false
    })
  }

  render() {
    const { modalActive } = this.state;
    const { setPlayers } = this.props;


    return (
      <div className= 'call-to-action'>
        <div className='call-to-action__inner call-to-action__inner--grey'>
          <Button handleClick={() => this.showModal()} refName={el => this.newGame = el}>
            New Game
          </Button>
          <Modal
            handleClose={() => this.closeModal()}
            active={modalActive}
            title='Start a new game'
            returnFocusElem={this.newGame}
          >
            <AppForm setPlayers={setPlayers} />
          </Modal>
          <Link to="/credits">
            <Button>
              Credits
            </Button>
          </Link>
          <a className='button btn btn-dark' role="button" href="http://www.google.com">
            Exit
          </a>
        </div>
      </div>
    )
  }
}

export default CallToAction;
