import React from 'react';

const Players = (props) => {
  const { players, score1, score2, playerOneActive } = props;
  const score = [score1, score2];

  const className = `players__list ${playerOneActive ? 'players__list--one' : 'players__list--two'}`;

  const playersList = (
    <ul className={className}>
      {players.map((player, index) =>
        <li key={index}>
          {player} : {score[index]}
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
