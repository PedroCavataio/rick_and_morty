import React, { useState, useEffect } from 'react';
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  }
 
  const handleSearch = () => {
    props.onSearch(id);
    setId(''); 
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className={styles.container}>
      <input 
        type='search'
        name='search'
        id='search'
        value={id}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoFocus
        /* placeholder=': ...id...'  */
              />
      <button onClick={handleSearch}>Add</button>
    </div>
  );
}

