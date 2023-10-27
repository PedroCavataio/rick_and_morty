import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import Cards from "./components/Cards/Cards";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Error from "./components/error/Error";
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";
import Nav from "./components/Nav/Nav";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const [searchValue, setSearchValue] = useState(""); 
  const navigate = useNavigate();

  
  function onSearch(id) {
    const parsedId = parseInt(id);
    if (isNaN(parsedId) || parsedId < 1 || parsedId > 826) {
      alert('Elige del "1 al 826". En ese rango, encontrarás a todos los personajes conocidos de la serie!');
      return;
    }

    try {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`) 
      .then(({ data }) => {
        if (data.name) {
          const characterExists = characters.find(
            (char) => char.id === data.id
          );
          if (characterExists) {
            window.alert("¡Este personaje ya está en la lista!");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
    } catch (error) {
      console.error('Error en la solicitud:', error.message);
    }
  }

  function onClose(id) {
    setCharacters((oldChars) =>
      oldChars.filter((char) => parseInt(char.id) !== parseInt(id))
    );
  }


  function addRandomCharacter() {
    const maxId = 826;   
    const randomId = Math.floor(Math.random() * maxId) + 1;
    const isCharacterAdded = characters.some((char) => char.id === randomId);
  
    if (!isCharacterAdded) {     
      axios
        .get(`https://rickandmortyapi.com/api/character/${randomId}`)
        .then(({ data }) => {
          setCharacters((oldChars) => [...oldChars, data]);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {     
      addRandomCharacter();
    }
  }

  
  async function login(userData) {
  const { email, password } = userData;
   /* const URL = 'http://localhost:3001/rickandmorty/login/';  */
  const URL = 'https://rick-and-morty-src.onrender.com/rickandmorty/login/';
 
 

  try {
    const { data } = await axios.get(URL + `?email=${email}&password=${password}`);
    const { access } = data;
    setAccess(access);
    access && navigate('/home');
  } catch (error) {
  }
}

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form onLogin={login} access={access} />} />

        <Route
          path="/home"
          element={
            <>
              <Nav
                onSearch={onSearch}
                onAddRandomCharacter={addRandomCharacter}
                setSearchValue={setSearchValue} 
              />
              <hr />
              <Cards characters={characters} onClose={onClose} />
            </>
          }
        />

        <Route
          path="/About"
          element={
            <>
              <Nav
                onSearch={onSearch}
                onAddRandomCharacter={addRandomCharacter}
                setSearchValue={setSearchValue} 
              />
              <hr />
              <About characters={characters} onClose={onClose} />
            </>
          }
        />

        <Route
          path="/detail/:id"  
          element={
            <>
              <Nav
                onSearch={onSearch}
                onAddRandomCharacter={addRandomCharacter}
                setSearchValue={setSearchValue} 
              />
              <hr />
              <Detail />   
            </>
          }
        />

        <Route
          path="/favorites"
          element={
            <>
              <Nav
                onSearch={onSearch}
                onAddRandomCharacter={addRandomCharacter}
                setSearchValue={setSearchValue} 
              />
              <hr />
              <Favorites onClose={onClose} /> 
            </>
          }
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

