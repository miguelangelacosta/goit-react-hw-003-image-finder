import React from 'react';
import PropTypes from 'prop-types';


const ImageGalleryItem = ({ imageUrl, alt, onClick }) => {
  return (
    <li className="gallery-item" onClick={onClick}>
      <img src={imageUrl} alt={alt} className="gallery-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
