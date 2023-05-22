import React from 'react'; 
import { Link } from 'react-router-dom';
import styles from "./Card.module.css";

export default function Card(props) {
  
  return (
    <div className={styles.container}>
        <div className={styles.buttonContainer}>
            <button onClick={props.onClose}>X</button> 
        </div>
            <Link to={`/detail/${props.id}`}>
              <div className={styles.dataContainer}>
                <h2 className="card-name">{props.name}</h2>
                <h2>{props.id}</h2>
                <h5>{props.status}</h5>
                <h5>{props.species}</h5>
                <h5>{props.gender}</h5>
                <h5>{props.origin}</h5>
              </div>
              <div>
                <img className={styles.image} src={props.image} alt={props.name} /> 
              </div>
            </Link>
    </div>
  );
}

