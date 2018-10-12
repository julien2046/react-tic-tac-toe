import React, { Component } from 'react';
import Players from './Players';

class Board extends Component {

  render() {
    const { players } = this.props;

    return (
      <div>
        <div className="players">
          <Players players={players} />
        </div>
        <div className="board">

        </div>
      </div>
    );
  }
}

export default Board;
