import React from 'react';

const Button = (props) => {
  const { handleClick, refName } = props;

	return (
		<button className='button btn btn-dark' onClick={handleClick} ref={refName}>
			{props.children}
		</button>
	)
}


export default Button;
