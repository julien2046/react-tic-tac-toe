import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Button from './Button';


class Credits extends Component {


  render() {
    const { credits } = this.props;

    const persons = (
      <ul className='credits__list'>
        {credits.map((person, index) =>
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
