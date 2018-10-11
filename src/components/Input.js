import React from 'react';

const Input = (props) => {
  const { name, label, type, refName } = props;

  return (
    <div className='input'>
      <label className='input__label' htmlFor={name}>{label}</label>
      <input className='input__field' id={name} name={name} type={type} ref={refName} />
    </div>
  );
}

export default Input;
