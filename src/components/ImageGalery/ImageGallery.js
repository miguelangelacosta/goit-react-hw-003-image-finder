import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import './ImageGalleryItem.css';

class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    onImageClick: PropTypes.func.isRequired,
  };

  render() {
    const { images, onImageClick } = this.props;

    return (
      <ul className="gallery">
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            imageUrl={image.webformatURL}
            alt={image.tags}
            onClick={() => onImageClick(image.largeImageURL)}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
