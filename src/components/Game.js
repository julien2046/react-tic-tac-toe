import React, { Component } from 'react';
import Board from './Board';


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
    xIsNext: true
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

  render() {
    const { history, stepNumber } = this.state;
    const { players } = this.props;

    // Current square
    const current = history[stepNumber];

    // Square's winning
    const winner = calculateWinner(current.squares);


    let status;
    if (winner) {
      status = "Winner: " + winner;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
            players={players}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
        </div>
      </div>
    );
  }
}

export default Game;
