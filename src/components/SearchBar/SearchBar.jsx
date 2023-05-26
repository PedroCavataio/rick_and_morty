import React, { useState, useEffect } from 'react';
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  }
 
  const handleSearch = () => {
    props.onSearch(id);
    setId(''); // Borrar el valor seleccionado después de la búsqueda
  }

  return (
    <div className={styles.container}>
      <input 
        type='search'
        name='search'
        id='search'
        value={id}
        onChange={handleChange}
        /* placeholder='_' */
      />
      <button onClick={handleSearch}>Agregar</button>
    </div>
  );
}
