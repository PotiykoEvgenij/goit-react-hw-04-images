import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ image, onItemClick }) => {
  const { webformatURL, largeImageURL } = image;

  const handleClick = () => {
    onItemClick(largeImageURL);
  };

  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt=""
        className={styles['ImageGalleryItem-image']}
        onClick={handleClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onItemClick: PropTypes.func.isRequired,
}