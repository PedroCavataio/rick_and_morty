import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';

import styles from "./Card.module.css";

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favorites = props.myFavorites;
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].id === props.id) {
        setIsFav(true);
        break;
      }
    }
  }, [props.myFavorites]);

  const handleToggleFav = () => {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav(props);
    }
  };

  const handleClose = () => {
    props.onClose(props.id); // Llama a props.onClose con el ID del personaje
    props.removeFav(props.id); // Elimina el personaje de la lista de favoritos
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button onClick={handleClose}>X</button>
        {
          isFav ? (
            <button onClick={handleToggleFav}>❤️</button>
          ) : (
            <button onClick={handleToggleFav}>🤍</button>
          )
        }
      </div>
      <div className={styles.dataContainer}>
        <h2 className="card-name">{props.name}</h2>
        <h2>{props.id}</h2>
        <h5>{props.status}</h5>
        <h5>{props.species}</h5>
        <h5>{props.gender}</h5>
        <h5>{props.origin}</h5>
      </div>
      <Link to={`/detail/${props.id}`}>
        <div>
          <img className={styles.image} src={props.image} alt={props.name} />
        </div>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  };
};

const mapDispatchToProps = {
  addFav,
  removeFav
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
