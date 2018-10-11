import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Button from './Button';


class Credits extends Component {

  state = {
    credits: []
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=10')
      .then(res => {
        this.setState({credits: res.data.results})
    });
  }

  render() {

    const persons = (
      <ul className='credits__list'>
        {this.state.credits.map((person, index) =>
          <li key={index}>
            {person.name.first}
          </li>
        )}
      </ul>
    );

    return (
    <div>
      <div className='credits'>
        <h2 className='credits__title'>Credit</h2>
        {persons}
      </div>
      <div className='button__container button__container--center'>
        <Link to="/">
          <Button styleBtn='button--back'>Back</Button>
        </Link>
      </div>
    </div>
    )
  }
}

export default Credits;
