import React from 'react';
import styles from './Titulo.module.css';

const Titulo = ({ children }) => {
  return <h1 className={styles.tit}>{children}</h1>;
};

export default Titulo;
