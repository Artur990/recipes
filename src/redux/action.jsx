import { FEATCH_RECIPES, GET_CUSINE, ADD_TO_FAVORITES } from "./consts";
const fetchRecipes = (recipes) => async (dispatch) => {
  console.log(recipes);
  const data = await fetch(
    `https://api.spoonacular.com/recipes/${recipes}/information?apiKey=${process.env.REACT_APP_API_KEY}`
  );
  const detailData = await data.json();
  dispatch({ type: FEATCH_RECIPES, payload: detailData });
};

const getCusine = (name) => async (dispatch) => {
  console.log(name);
  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
  );

  const data = await response.json();
  dispatch({ type: GET_CUSINE, payload: data });
};

const addTofavorites = (fav) => ({ type: ADD_TO_FAVORITES, payload: fav });

export { fetchRecipes, getCusine, addTofavorites };
