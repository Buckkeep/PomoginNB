import React from 'react';
import classNames from 'classnames';
import './index.css';
const Arrow = ({ isOrange = false, isMassive = false }) => {
  const styles = classNames({
    'arrow-letsgooo': isOrange,
    'massive-arrow': isMassive,
  });

  return <p className={styles}>{'00000'}</p>;
};

export default Arrow;
