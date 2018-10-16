import React from 'react';

const Square = (props) => {
  const { value, onClick, className } = props;

  return (
    <button className={`square ${className}`} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
