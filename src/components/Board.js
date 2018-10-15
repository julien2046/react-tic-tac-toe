import React, { Component } from 'react';
import Players from './Players';
import Square from './Square';


class Board extends Component {

  renderSquare(i) {

    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
     const { players, score1, score2, playerOneActive } = this.props;

    return (
      <div>
        <div className="players">
          <Players players={players} score1={score1} score2={score2} playerOneActive={playerOneActive} />
        </div>
        <div className="board">
          <div className="board__row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>

          <div className="board__row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>

          <div className="board__row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
