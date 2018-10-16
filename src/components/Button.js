import React from 'react';

const Button = (props) => {
  const { handleClick, refName, styleBtn } = props;

	return (
		<button
      className={`button ${styleBtn ? styleBtn : '' }`}
      onClick={handleClick}
      ref={refName}>
			{props.children}
		</button>
	)
}


export default Button;
