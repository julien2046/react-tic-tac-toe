import React from 'react';

const Players = (props) => {
  const { players, score1, score2 } = props;

  const playersList = (
    <ul className='players__list'>
      {players.map((player, index) =>
        <li key={index}>
          {player}
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
