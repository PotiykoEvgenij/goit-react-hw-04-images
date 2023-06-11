import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import styles from './Loader.module.css'

export const CustomLoader = () => {
  return (
    <div className={styles.Loader}>
      <ThreeDots
        height={80}
        width={80}
        color="#3f51b5"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};