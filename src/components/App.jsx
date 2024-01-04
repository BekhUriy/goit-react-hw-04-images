import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import CustomLoader from './Loader/Loader';
import './styles/styles.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);

  const handleSubmit = searchQuery => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const openModal = largeImageURL => {
    setLargeImageURL(largeImageURL);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setLargeImageURL('');
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=40498232-0e7dac35b6ba9fe0d736e222d&image_type=photo&orientation=horizontal&per_page=12`
        );
        if (page === 1) {
          setTotalHits(response.data.totalHits);
        }
        setImages(prevImages => [...prevImages, ...response.data.hits]);
      } catch (error) {
        console.error('Error fetching images: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery images={images} openModal={openModal} />
      {loading && <CustomLoader />}
      {images.length > 0 && images.length < totalHits && (
        <Button onClick={handleLoadMore} />
      )}{' '}
      {showModal && (
        <Modal largeImageURL={largeImageURL} closeModal={closeModal} />
      )}
    </div>
  );
};

export default App;
