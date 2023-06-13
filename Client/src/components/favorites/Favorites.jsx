import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import styles from './Favorites.module.css';
import { addFav, removeFav, orderCards, filterCards } from '../../redux/actions';

function Favorites({ myfavorites, onClose}) {     
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

 
  const handleToggleFav = (id) => {
    const isFavorite = myfavorites.some((fav) => fav.id === id);
    if (isFavorite) {
      dispatch(removeFav(id));
    } else {
      const character = myfavorites.find((fav) => fav.id === id);
      if (character) {
        dispatch(addFav(character));
      }
    }
  };


  const handleOrder = (e) => {
    setAux(!aux);
    dispatch(orderCards(e.target.value));
  };

  const handleFilter = (e) => {
    const selectedFilter = e.target.value;
    if (selectedFilter === 'all') {
      dispatch(filterCards(null));
    } else {
      dispatch(filterCards(selectedFilter));
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.orderContainer}>
          <label htmlFor="orderSelect" className={styles.label}>Orden:</label>
          <select id="orderSelect" onChange={handleOrder} className={styles.select}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
        </div>
        <div className={styles.filterContainer}>
          <label htmlFor="filterSelect" className={styles.label}>
            Filtrar por género:
          </label>
          <select id="filterSelect" onChange={handleFilter} className={styles.select}>
            <option value="">Todos</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>


        {myfavorites.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={onClose}
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

export default connect(mapStateToProps)(Favorites);

