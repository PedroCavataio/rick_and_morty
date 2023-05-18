import React from 'react'; 
import styles from "./Card.module.css";

export default function Card({ onClose, id, name, status, species, gender, origin, image }) {
  const handleOnClose = () => {
    onClose(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button onClick={handleOnClose}>X</button> 
      </div>
      <div className={styles.dataContainer}>
        <h2>{id}</h2>
        <h2>{name}</h2>
        <h5>{status}</h5>
        <h5>{species}</h5>
        <h5>{gender}</h5>
        <h5>{origin}</h5>
      </div>
      <div>
        <img className={styles.image} src={image} alt={name} /> 
      </div>
    </div>
  );
}
