import React, { Component } from 'react';

import Board from './Board';
import Modal from './Modal';
import Button from './Button';


function calculateWinner(squares) {

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}


class Game extends Component {

  state = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true,
    modalActive: false
  }

  componentDidUpdate(prevProps, prevState) {
    const { history, stepNumber } = this.state;
    const current = history[stepNumber];

    const winner = calculateWinner(current.squares);

    if(prevState.history !== history) {
      if (winner) this.showModal();
    }
  }


  handleClick(i) {
    const { history , stepNumber, xIsNext } = this.state;


    const historyCurrent = history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";

    this.setState({
      history: historyCurrent.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: historyCurrent.length,
      xIsNext: !xIsNext
    });
  }

  showModal() {
    this.setState({modalActive: true});
  }

  render() {
    const { history, stepNumber, modalActive } = this.state;
    const { players } = this.props;

    const current = history[stepNumber];

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
            players={players}
          />
        </div>

        <Modal
          active={modalActive}
          title='Restart a game'
          close={false}
        >
          <Button>
            Restart
          </Button>
          <a className='button btn btn-dark' role="button" href="http://www.google.com">
            Exit
          </a>
        </Modal>
      </div>
    );
  }
}

export default Game;
