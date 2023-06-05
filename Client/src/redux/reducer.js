import axios from "axios";

const ADD_FAV = "ADD_FAV";
const REMOVE_FAV = "REMOVE_FAV";
const FILTER = "FILTER";
const ORDER = "ORDER";

const initialState = {
  myFavorites: [],
  allCharacters: [], // Nueva propiedad para almacenar todos los personajes
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {

    // case ADD_FAV:
    //   return {
    //     ...state,
    //     myFavorites: [...state.myFavorites, payload],
    //     allCharacters: [...state.allCharacters, payload], // Agregar el nuevo personaje a allCharacters
    //   };

    case 'ADD_FAV':
        return { ...state, myFavorites: [...state.myFavorites, payload], allCharacters: [...state.allCharacters, payload],
        }; 

    // case REMOVE_FAV:
    //   const filteredFavs = state.myFavorites.filter(
    //     (fav) => fav.id !== Number(payload)
    //   );
    //   return {
    //     ...state,
    //     myFavorites: filteredFavs,
    //     allCharacters: filteredFavs, // Actualizar allCharacters con los personajes filtrados
    //   };

    case 'REMOVE_FAV':
      return { ...state, myFavorites: payload };

    case FILTER:
      let filteredCharacters = [];
      if (payload) {
        filteredCharacters = state.allCharacters.filter(
          (character) => character.gender === payload
        );
      } else {
        filteredCharacters = state.allCharacters; // Mostrar todos los personajes
      }
      return {
        ...state,
        myFavorites: filteredCharacters, // Actualizar myFavorites con los personajes filtrados
      };
      
    case ORDER:
      const orderedCharacters = [...state.allCharacters];
      orderedCharacters.sort((a, b) => {
        if (payload === "A") {
          return a.id - b.id; // Orden ascendente
        } else if (payload === "D") {
          return b.id - a.id; // Orden descendente
        } else {
          return 0; // No se realiza ningún ordenamiento
        }
      });
      return {
        ...state,
        myFavorites: orderedCharacters, // Actualizar myFavorites con los personajes ordenados
      };
    default:
      return state;
  }
}