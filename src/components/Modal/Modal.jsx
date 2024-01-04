import React, { useEffect } from 'react';
import '../styles/styles.css';

const Modal = ({ largeImageURL, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleClick = event => {
    if (event.target.classList.contains('Overlay')) {
      closeModal();
    }
  };

  return (
    <div className="Overlay" onClick={handleClick}>
      <div className="Modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;
