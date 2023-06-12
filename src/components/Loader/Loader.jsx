import React from 'react';
import { ProgressBar } from 'react-loader-spinner';
import styles from './Loader.module.css'

export const CustomLoader = () => {
  return (
    <div className={styles.Loader}>
      <ProgressBar
      height="80"
      width="300"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor = '#3f51b5'
      barColor = '#3f51b5'
      />
    </div>
  );
};