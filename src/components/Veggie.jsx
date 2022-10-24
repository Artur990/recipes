import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
const Veggie = () => {
  useEffect(() => {
    getVeggie();
  }, []);

  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const date = await api.json();
      localStorage.setItem("veggie", JSON.stringify(date.recipes));
      setVeggie(date.recipes);
    }
  };
  return (
    <Wrapper>
      <h3>Polular Vegetarian</h3>
      <Splide
        options={{
          perPage: 3,
          gap: "5rem",
          drag: "free",
          pagination: false,
          arrows: false,
        }}
      >
        {veggie.map((recipes) => {
          return (
            <SplideSlide key={recipes.id}>
              <Card>
                <Link to={"/recipe/" + recipes.id}>
                  <p>{recipes.title}</p>
                  <img src={recipes.image} alt={recipes.title} />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 2rem 0rem;
  width: 80%;
`;
const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 10;
    bottom: 0;
    transform: translate(-50, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  left: 30px;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0) rgba(0, 0, 0 0.5));
`;
export default Veggie;
