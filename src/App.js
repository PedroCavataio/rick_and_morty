import React, { useState } from "react";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import axios from "axios";
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Error from './components/error/Error.jsx';
import Form from './components/form/Form.jsx';



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
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav onSearch={onSearch} onAddRandomCharacter={addRandomCharacter} />
                <hr />
              </>
            }
          />

        <Route
            path="/"
            element={
              <>
                <Nav onSearch={onSearch} onAddRandomCharacter={addRandomCharacter} />
                <hr />
                <Form characters={characters} onClose={onClose} />
              </>
            }
          />



          <Route
            path="/home"
            element={
              <>
                <Nav onSearch={onSearch} onAddRandomCharacter={addRandomCharacter} />
                <hr />
                <Cards characters={characters} onClose={onClose} />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <Nav onSearch={onSearch} onAddRandomCharacter={addRandomCharacter} />
                <hr />
                <About characters={characters} onClose={onClose} />
              </>
            }
          />

          <Route
            path="/detail/:detailId"
            element={
              <>
                <Nav onSearch={onSearch} onAddRandomCharacter={addRandomCharacter} />
                <hr />
                <Detail characters={characters} onClose={onClose} />
              </>
            }
          />





          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
  
export default App;

