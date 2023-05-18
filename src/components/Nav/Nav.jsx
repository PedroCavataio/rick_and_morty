import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./Nav.module.css";

function Nav(props) {
  const handleRandomCharacter = () => {
    props.onAddRandomCharacter();
  };

  return (
    
    <div className={styles.barraSuperior}>
      <SearchBar onSearch={props.onSearch} />
      <div className={styles.contenedorNav}>
        <button className={styles.miBoton} onClick={handleRandomCharacter}>Aleatorio</button>
        </div>
    </div>
    
  );
}

export default Nav;

