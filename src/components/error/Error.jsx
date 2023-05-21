import React from 'react';
import styles from './Error.module.css';

const Error = () => {
  return (
    <div className={styles.error}>
      <h1>Error 404</h1>
      <p>La página que estás buscando no existe.</p>
    </div>
  );
};

export default Error;
