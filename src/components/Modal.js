import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { imageUrl, onClose } = this.props;

    return (
      <div className="overlay" onClick={onClose}>
        <div className="modal">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
