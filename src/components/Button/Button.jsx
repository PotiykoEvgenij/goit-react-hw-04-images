import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css'

export const Button = ({ onClick, disabled }) => {
  return (
    <button type="button" className={styles.Button} onClick={onClick} disabled={disabled}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};