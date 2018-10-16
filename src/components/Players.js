import React from 'react';

const Players = (props) => {
  const { players, score1, score2, playerOneActive } = props;
  const score = [score1, score2];

  const className = `players__list ${playerOneActive ? 'players__list--one' : 'players__list--two'}`;

  const playersList = (
    <ul className={className}>
      {players.map((player, index) =>
        <li key={index}>
          <span className="players__label">Player {index + 1}</span> <span className="players__player">{player} {score[index]}</span>
        </li>
      )}
    </ul>
  );

  return (
    <div className='players__container'>
      {playersList}
    </div>
  );
}

export default Players;
