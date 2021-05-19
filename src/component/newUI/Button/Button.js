import React from 'react';

import styles from './styles.module.scss';


const Button = ({ name, type, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  if (type === 'add') {
    return (
      <button onClick={handleClick} className={styles.buttonAdd}>
        {name}
        <span>+</span>
      </button>
    );
  } if (type === 'simple') {
    return (
      <button onClick={handleClick} className={styles.buttonSimple}>
        {name}
      </button>
    );
  } if (type === 'move') {
    return (
      <button onClick={handleClick} className={styles.buttonMove}>
        {name}
      </button>
    );
  }
  return <button>{name}</button>;
};

export default Button;
