import React from 'react';
import '../styles/styles.css';

const ImageGalleryItem = ({ image, openModal }) => {
  const handleClick = () => {
    openModal(image.largeImageURL);
  };

  return (
    <li className="ImageGalleryItem">
      <img
        src={image.webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        onClick={handleClick}
      />
    </li>
  );
};

export default ImageGalleryItem;
