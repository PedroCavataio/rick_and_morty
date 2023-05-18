import React, { useState } from 'react';
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  }
 
  const handleSearch = () => {
    props.onSearch(id);
  }

  return (
    <div className={styles.container}>
      <input 
        type='search'
        name='search'
        id='search'
        value={id}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Agregar</button>
    </div>
  );
}
