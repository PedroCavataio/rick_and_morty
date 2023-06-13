import axios from "axios";

const ADD_FAV = "ADD_FAV";
const REMOVE_FAV = "REMOVE_FAV";
const FILTER = "FILTER";
const ORDER = "ORDER";

const initialState = {
  myFavorites: [],
  allCharacters: [], 
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {

    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.allCharacters, payload], 
      };

    case REMOVE_FAV:
      const filteredFavs = state.myFavorites.filter(
        (fav) => fav.id !== Number(payload)
      );
      return {
        ...state,
        myFavorites: filteredFavs,
        allCharacters: filteredFavs, 
      };

    case FILTER:
      let filteredCharacters = [];
      if (payload) {
        filteredCharacters = state.allCharacters.filter(
          (character) => character.gender === payload
        );
      } else {
        filteredCharacters = state.allCharacters; 
      }
      return {
        ...state,
        myFavorites: filteredCharacters, 
      };
      
    case ORDER:
      const orderedCharacters = [...state.allCharacters];
      orderedCharacters.sort((a, b) => {
        if (payload === "A") {
          return a.id - b.id; 
        } else if (payload === "D") {
          return b.id - a.id; 
        } else {
          return 0; 
        }
      });
      return {
        ...state,
        myFavorites: orderedCharacters, 
      };
    default:
      return state;
  }
}