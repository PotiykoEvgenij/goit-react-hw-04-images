import React, { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { CustomLoader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { FetchImages } from './Api/api';
import styles from './App.module.css'

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery) return;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const newImages = await FetchImages(searchQuery, page);
        setImages((prevImages) => [...prevImages, ...newImages]);
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [searchQuery, page]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Escape') {
        setSelectedImage(null);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <CustomLoader  />}
      {images.length > 0 && !isLoading && images.length % 12 === 0 && (
        <Button onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <Modal image={selectedImage.largeImageURL} onClose={handleCloseModal} />
      )}
    </div>
  );
};