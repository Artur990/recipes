import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
// import "@splidejs/splide/dist/css/splide.min.css";

import "@splidejs/react-splide/css";
const Popular = () => {
  useEffect(() => {
    getPopulat();
  }, []);

  const [popular, setPopular] = useState([]);

  const getPopulat = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const date = await api.json();
      localStorage.setItem("popular", JSON.stringify(date.recipes));
      setPopular(date.recipes);
    }
  };

  return (
    <Wrapper>
      <h3>Polular Peoducts</h3>
      <Splide
        options={{
          perPage: 4,
          gap: "5rem",
          drag: "free",
          pagination: false,
          arrows: false,
        }}
      >
        {popular.map((recipes) => {
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
  margin: 4rem 0rem;
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
    left: 0;
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
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0) rgba(0, 0, 0 0.5));
`;
export default Popular;
