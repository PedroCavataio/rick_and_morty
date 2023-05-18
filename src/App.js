import React, { useState } from "react";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        // Verificar si el personaje ya existe en la lista
        const characterExists = characters.find((char) => char.id === data.id);
        if (characterExists) {
          window.alert("¡Este personaje ya está en la lista!");
        } else {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }

  function onClose(id) {
    setCharacters((oldChars) => {
      const filteredChars = oldChars.filter(
        (char) => parseInt(char.id) !== parseInt(id)
      );
      return filteredChars;
    });
  }

  function addRandomCharacter() {
   axios("https://rickandmortyapi.com/api/character/")
     .then(({ data }) => {
       const availableCharacters = data.results.filter(
         (character) => !characters.some((char) => char.id === character.id)
       );
       if (availableCharacters.length > 0) {
         const randomCharacter =
           availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
         setCharacters((oldChars) => [...oldChars, randomCharacter]);
       } else {
         window.alert("¡No hay personajes aleatorios disponibles!");
       }
     })
     .catch((error) => {
       console.log(error);
     });
 }
 
  return (
    <div className="App">
      <Nav onSearch={onSearch} onAddRandomCharacter={addRandomCharacter} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;

