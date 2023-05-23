const ADD_FAV = "ADD_FAV";
const REMOVE_FAV = "REMOVE_FAV";

const initialState = {
  myFavorites: []
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload]
      };
    case REMOVE_FAV:
      const filteredFavs = state.myFavorites.filter(
        fav => fav.id !== Number(payload)
      );
      return {
        ...state,
        myFavorites: filteredFavs
      };
    default:
      return { ...state };
  }
}

export default reducer;
