import React, { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import Favorites from "../favorites/Favorites.jsx";
import logohenry from "../img/logohenry.png";


function Nav(props) {
  const { onSearch, onAddRandomCharacter, setSearchValue } = props;

  useEffect(() => {
    setSearchValue(""); // Establecer el valor del input en blanco cuando se carga el componente
  }, [setSearchValue]);

  const handleRandomCharacter = () => {
    onAddRandomCharacter();
  };

 
  return (
    <div className={styles.barraSuperior}>
      <NavLink to="/">
        <button className={styles.infoBoton}>Log out</button>
      </NavLink>
      <NavLink to="/home">
        <button className={styles.infoBoton}>Home</button>
      </NavLink>
      <NavLink to="/favorites">
        <button className={styles.infoBoton}>Favorites</button>
      </NavLink>
      <NavLink to="/about">
        <button className={styles.infoBoton}>About</button>
      </NavLink>
      <div>
  <a href="https://www.soyhenry.com/?utm_source=google&utm_medium=cpc&utm_campaign=GADS_SEARCH_ARG_BRAND&utm_content=Brand&gad=1&gclid=Cj0KCQjwjryjBhD0ARIsAMLvnF_GWZ-MKGdG13wh7BrKQq-0ogMsxu2AKchOIyka-B0e6GRDFq-TwRgaAizNEALw_wcB" target="_blank">
    <img src={logohenry} alt="Logo" className={styles.logo} />
  </a>
</div>

      <SearchBar onSearch={onSearch} />
      <div className={styles.contenedorNav}>
        <button className={styles.miBoton} onClick={handleRandomCharacter}>Aleatorio</button>
      </div>

    </div>
  );
};

export default Nav;




