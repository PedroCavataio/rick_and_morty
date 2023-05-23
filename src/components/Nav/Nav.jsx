import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

function Nav(props) {
  const handleRandomCharacter = () => {
    props.onAddRandomCharacter();
  };

  return (
    <div className={styles.barraSuperior}>

      <NavLink to = "/" >
        <button className={styles.infoBoton}>Log out</button>
      </NavLink>    
      <NavLink to = "/home" >
        <button className={styles.infoBoton}>Home</button>
      </NavLink>
      <NavLink to = "/favorites" >
        <button className={styles.infoBoton}>Favorites</button>
      </NavLink>
      <NavLink to = "/about" >
        <button className={styles.infoBoton}>About</button>
      </NavLink>
      <SearchBar onSearch={props.onSearch} />
      <div className={styles.contenedorNav}>
        <button className={styles.miBoton} onClick={handleRandomCharacter}>Aleatorio</button>
      </div>
    </div>
    
  );
}

export default Nav;

