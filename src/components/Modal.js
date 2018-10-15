import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import Close from '../assets/img/close.svg';

class Modal extends Component {

  constructor(props) {
    super(props);
		this.el = document.createElement('div');
  }

  componentDidMount() {
    document.getElementById('modal-root').appendChild(this.el);

    document.body.addEventListener('keydown', e => {
      if (e.which === 27) {
        this.handleClose();
      }
    });
  }

  handleKeyPress = e => {
    if (e.which === 13) {
      this.handleClose();
    }
  }

  handleClick = e => {
    try {
      if (e.target.classList.contains('modal')) {
        this.handleClose();
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  handleClose = () => {
    this.props.handleClose(false);

    if (this.props.returnFocusElem) {
      this.props.returnFocusElem.focus();
    }
  }


  modalContent = () => {

    return (
      <div className='modal' onClick={(e) => this.handleClick(e)}>
        <div className='modal__wrapper'>
          <div className='modal__title-wrapper'>
            {this.props.title ? <h1 className='modal__title'>{this.props.title}</h1> : ''}
            {this.props.close ?
              <img src={Close}
                   className='modal__close'
                   tabIndex='0'
                   alt='Close Modal'
                   onClick={this.handleClose}
                   onKeyPress={(e) => this.handleKeyPress(e)}
              /> : ''
            }
          </div>
          <div className='modal__box'>
            <div className='modal__content'>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }


  render() {
    if (this.props.active) {
      return createPortal(this.modalContent(), this.el);
    } else {
      return false;
    }
  }
}

export default Modal;
