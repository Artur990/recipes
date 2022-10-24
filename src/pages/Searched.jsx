import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const Searched = () => {
  const [searchedRecipes, setSearched] = useState([]);
  let parms = useParams();

  const getSearched = async (name) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
      // `https://api.spoonacular.com/recipes/complexSearch?apiKey=400f15a8be104a84aa27874e6c6e39f4&query=644800`
    );
    const date = await response.json();
    setSearched(date.results);
  };

  useEffect(() => {
    getSearched(parms.type);
    // console.log(parms.search);
  }, [parms.type]);
  return (
    <div>
      <div>hej2</div>
      <Grid>
        {searchedRecipes.map((e) => {
          return (
            <Card id={e.id}>
              <img src={e.image} alt="" />
              <h4>{e.title}</h4>
            </Card>
            // <div id={e.id}>
            //   <h2>{e.title}</h2>
            //   <img src={e.image} alt="" />
            // </div>
          );
        })}
      </Grid>
    </div>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
