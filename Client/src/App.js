import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
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

   /*  useEffect(() => {
    if (!access) {
      navigate("/");
    }
  }, [access, navigate]);  */ 

  async function onSearch(id) {
    const parsedId = parseInt(id);
    if (isNaN(parsedId) || parsedId < 1 || parsedId > 826) {
      alert('Elige del "1 al 826". En ese rango, encontrarás a todos los personajes conocidos de la serie!');
      return;
    }
     
    try {
      const { data } = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);
      if (data.name) {
        const characterExists = characters.find((char) => char.id === data.id);
        if (characterExists) {
          window.alert("¡Este personaje ya está en la lista!");
        } else {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.error('Error en la solicitud:', error.message);
    }
  }  

  async function login(userData) {
  const { email, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';
  try {
    const { data } = await axios.get(URL + `?email=${email}&password=${password}`);
    const { access } = data;
    setAccess(access);
    access && navigate('/home');
  } catch (error) {
    console.error('Error en el inicio de sesión:', error.message);
  }
}

  function onClose(id) {
    setCharacters((oldChars) =>
      oldChars.filter((char) => parseInt(char.id) !== parseInt(id))
    );
  }

  function addRandomCharacter() {
    const maxId = 826;   
    const id = Math.floor(Math.random() * maxId) + 1;
    const isCharacterAdded = characters.some((char) => char.id === id);
  
    if (!isCharacterAdded) {     
      axios
        .get(`http://localhost:3001/rickandmorty/character/${id}`)
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
              <Detail characters={characters}/>   
              
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
              <Favorites characters={characters} onClose={onClose} />
            </>
          }
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;