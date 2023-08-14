import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  render() {
    const { imageUrl, alt, onClick } = this.props;

    return (
      <li className="gallery-item" onClick={onClick}>
        <img src={imageUrl} alt={alt} />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
