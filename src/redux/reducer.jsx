import { FEATCH_RECIPES, GET_CUSINE, ADD_TO_FAVORITES } from "./consts";
const initialState = {
  recipes: [],
  coś: [2],
  cuisine: [],
  favorites: [],
};
const recipes = (
  state = initialState,
  // = JSON.parse(localStorage.getItem("isFavv")) ?? initialState,
  action
) => {
  switch (action.type) {
    case FEATCH_RECIPES: {
      console.log(action);
      console.log(state);
      return { ...state, recipes: action.payload };
    }
    case GET_CUSINE: {
      console.log(action.payload.results);
      return { ...state, cuisine: action.payload.results };
    }
    case ADD_TO_FAVORITES: {
      return { ...state, favorites: action.payload };
    }

    default:
      return state;
  }
};

export default recipes;
