import React, {Component} from 'react';

class Input extends Component {


  render () {
    const { name, label, type, refName, onChange } = this.props;

    return (
      <div className='input'>
        <label className='input__label' htmlFor={name}>{label}</label>
        <input className='input__field'
          type={type}
          name={name}
          id={name}
          onChange={event => onChange(event)}
          ref={refName} />
      </div>
    );
  }
}

export default Input;
