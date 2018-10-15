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
    modalActive: false,
    score1: 0,
    score2: 0,
    playerOneActive: true
  }

  componentDidUpdate(prevProps, prevState) {
    const { history, stepNumber } = this.state;

    if (prevState.history !== history) {
      const current = history[stepNumber];
      const winner = calculateWinner(current.squares);

      if (winner) {
        this.showModal();
        winner === "X"
          ?
        this.setState(state => ({
          score1: state.score1 + 1
        }))
          :
        this.setState(state => ({
          score2: state.score2 + 1
        }))
      }
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
      xIsNext: !xIsNext,
      playerOneActive: !xIsNext
    });
  }

  showModal() {
    this.setState({modalActive: true});
  }

  restartGame() {

    this.setState({
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      modalActive: false,
      playerOneActive: true
    });
  }


  render() {
    const { history, stepNumber, modalActive, score1, score2, playerOneActive } = this.state;
    const { players } = this.props;

    const current = history[stepNumber];

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
            players={players}
            playerOneActive={playerOneActive}
            score1={score1}
            score2={score2}
          />
        </div>

        <Modal
          active={modalActive}
          title='Restart a game'
          close={false}
        >
          <Button handleClick={() => this.restartGame()}>
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
