import React, {Component} from 'react';

class Input extends Component {

  state = {
    value: ''
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render () {
    const { name, label, type, refName } = this.props;

    return (
      <div className='input'>
        <label className='input__label' htmlFor={name}>{label}</label>
        <input className='input__field'
          type={type}
          id={name}
          value={this.state.value}
          onChange={(e) => this.handleChange(e)}
          ref={refName} />
      </div>
    );
  }
}

export default Input;
