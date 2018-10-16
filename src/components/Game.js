import React, { Component } from 'react';

import Board from './Board';
import Modal from './Modal';
import Button from './Button';

import xicon from '../assets/img/x-icon.svg';
import oicon from '../assets/img/o-icon.svg';
import victoryIcon from '../assets/img/victory-icon.svg';


function findLines(lines) {
  let linesString = lines.join();

  if (linesString === '0,1,2')      return 'ligne-1';
  else if (linesString === '3,4,5') return 'ligne-2';
  else if(linesString === '6,7,8')  return 'ligne-3';
  else if (linesString === '0,3,6') return 'ligne-4';
  else if (linesString === '1,4,7') return 'ligne-5';
  else if (linesString === '2,5,8') return 'ligne-6';
  else if (linesString === '0,4,8') return 'ligne-7';
  else if (linesString === '2,4,6') return 'ligne-8';
  else return 'no-line';
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
    playerOneActive: true,
    lines: [],
    count: 0,
    winner: ''
  }

  componentDidUpdate(prevProps, prevState) {
    const { history, stepNumber } = this.state;

    if (prevState.history !== history) {
      const current = history[stepNumber];
      const winner = this.calculateWinner(current.squares);

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
    const { history , stepNumber, xIsNext, count } = this.state;

    const historyCurrent = history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    let winner = count % 2 ? 'player-2' : 'player-1';

    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }


    squares[i] = xIsNext ? "X" : "O";

    this.setState(state => ({
      history: historyCurrent.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: historyCurrent.length,
      xIsNext: !xIsNext,
      playerOneActive: !xIsNext,
      count: state.count + 1,
      winner: winner
    }));

    if (count === 8) {
      this.setState({winner: null});
      this.showModal();
    }
  }

  calculateWinner(squares) {

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
        this.setState({lines: lines[i]})
        return squares[a];
      }
    }

    return null;
  }

  showModal() {
    setTimeout(() => {
      this.setState({modalActive: true}); },
    2000);
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
      playerOneActive: true,
      lines: [],
      count: 0,
      winner: ''
    });
  }

  render() {
    const { history, stepNumber, modalActive, score1, score2, playerOneActive, lines, winner } = this.state;
    const { players } = this.props;

    const current = history[stepNumber];
    const linesClassName = findLines(lines);

    return (
      <div className="game">
        <div className="game__board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
            players={players}
            playerOneActive={playerOneActive}
            score1={score1}
            score2={score2}
            classNameLine={linesClassName}
          />
        </div>

        <Modal
          active={modalActive}
          close={false}
          className="modal--end-game"
          title={`${winner ? '' : 'No winner ...'}`}
        >
          {
            winner === "player-1" &&
            <div className='game__winner'>
              <p className="game__title">Victory to Player 1 !</p>
              <p className="game__img"><img src={xicon} alt="icon x" /><img alt="victory" src={victoryIcon} /></p>
            </div>
          }
          {
            winner === "player-2" &&
            <div className='game__winner'>
              <p className="game__title">Vicotory to Player 2 !</p>
              <p className="game__img"><img src={oicon} alt="icon o" /><img alt="victory" src={victoryIcon} /></p>
            </div>
          }
          <div className='game__buttons'>
            <Button handleClick={() => this.restartGame()}>
              Restart
            </Button>
            <a className='button button--link' role="button" href="http://www.google.com">
              Exit
            </a>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Game;
