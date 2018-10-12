import React from 'react';

const Players = (props) => {
  const { players } = props;

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
