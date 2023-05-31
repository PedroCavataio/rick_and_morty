import React from 'react';
import styles from './Error.module.css';
import img404 from "../img/img404.png";

const Error = () => {
  return (
    <div className={styles.error}>
      <h1>Error 404</h1>
      <div className={styles.rym}>
        <img src={img404} alt="Mi imagen" style={{ borderTopLeftRadius: '8px' }} />
      </div>
      <div className={styles.text}>
         <p>La página que estás buscando no existe.</p>
      </div>
    </div>
  );
};

export default Error;
