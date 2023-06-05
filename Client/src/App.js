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
  const [searchValue, setSearchValue] = useState(""); // Nuevo estado para el valor del input
  const navigate = useNavigate();

  const EMAIL = "pedrocavataio@gmail.com";
  const PASSWORD = "123456";

  /*  useEffect(() => {
    if (!access) {
      navigate("/");
    }
  }, [access, navigate]);  */ 

  function onSearch(id) {
    const parsedId = parseInt(id);
    if (isNaN(parsedId) || parsedId < 1 || parsedId > 826) {
      alert('Elige del "1 al 826". En ese rango, encontrarás a todos los personajes conocidos de la serie!');
      return;
    }

    try {
    axios
      .get(`http://localhost:3001/rickandmorty/character/${id}`) //eemplazar
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

  /* function addRandomCharacter() {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(({ data }) => {
        const availableCharacters = data.results.filter(
          (character) => !characters.some((char) => char.id === character.id)
        );
        if (availableCharacters.length > 0) {
          const randomCharacter =
            availableCharacters[
              Math.floor(Math.random() * availableCharacters.length)
            ];
          setCharacters((oldChars) => [...oldChars, randomCharacter]);
        } else {
           window.alert("¡No hay personajes aleatorios disponibles!"); 
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } */

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
  
  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

/*   function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
 } */



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
                setSearchValue={setSearchValue} // Pasa setSearchValue a Nav para establecer el valor del input
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
                setSearchValue={setSearchValue} // Pasa setSearchValue a Nav para establecer el valor del input
              />
              <hr />
              <About characters={characters} onClose={onClose} />
            </>
          }
        />

        <Route
          path="/detail/:id"   //cambiada
          element={
            <>
              <Nav
                onSearch={onSearch}
                onAddRandomCharacter={addRandomCharacter}
                setSearchValue={setSearchValue} // Pasa setSearchValue a Nav para establecer el valor del input
              />
              <hr />
              <Detail characters={characters}/>   cambiado
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
                setSearchValue={setSearchValue} // Pasa setSearchValue a Nav para establecer el valor del input
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





     