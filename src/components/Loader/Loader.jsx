import React from 'react';
import { Circles } from 'react-loader-spinner';
import '../styles/styles.css';

const CustomLoader = () => {
  return (
    <div className="Loader">
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        timeout={3000}
      />
    </div>
  );
};

export default CustomLoader;
