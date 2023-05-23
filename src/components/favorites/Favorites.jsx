import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import styles from './Favorites.module.css';
import { addFav, removeFav } from '../../redux/actions';

function Favorites({ myfavorites, onClose, addFav, removeFav }) {
  const handleToggleFav = (id) => {
    const isFavorite = myfavorites.some((fav) => fav.id === id);
    if (isFavorite) {
      removeFav(id);
    } else {
      const character = myfavorites.find((fav) => fav.id === id);
      if (character) {
        addFav(character);
      }
    }
  };

  return (
    <div>
      <div className={styles.container}>
        {myfavorites.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={onClose} // Modificación aquí
            onToggleFav={() => handleToggleFav(character.id)}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myfavorites: state.myFavorites,
  };
};

const mapDispatchToProps = {
  addFav,
  removeFav,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
