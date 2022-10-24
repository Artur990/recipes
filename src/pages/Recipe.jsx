import React, { useState } from "react";
import { useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../redux/action";
import styled from "styled-components";
const Recipe = () => {
  const [details, setDetails] = useState({});
  const [is, setI] = useState(true);
  const [Fav, setFav] = useState(false);
  let params = useParams();
  const recipres = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  console.log(recipres.title);
  useEffect(() => {
    dispatch(fetchRecipes(params.name));
    // featchDetals(params.name);
  }, []);
  // console.log(details.instructions);
  return (
    <Container>
      <Main>
        <Content>
          <h2>{recipres.title}</h2>
          <img src={recipres.image} alt={recipres.title} />
        </Content>
        <ContentTwo>
          <div style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <ButtonPrimary onClick={() => setI(true)}>
              Instructions
            </ButtonPrimary>
            <ButtonSecondary onClick={() => setI(false)}>
              Summary
            </ButtonSecondary>
            {Fav ? (
              <AiFillHeart
                onClick={() => setFav(false)}
                style={{ width: "2rem", height: "2rem", color: "#cf7911" }}
              />
            ) : (
              <AiFillHeart
                onClick={() => setFav(true)}
                style={{ width: "2rem", height: "2rem" }}
              />
            )}
          </div>
          {is ? (
            <h3
              dangerouslySetInnerHTML={{ __html: recipres.instructions }}
            ></h3>
          ) : (
            <h3 dangerouslySetInnerHTML={{ __html: recipres.summary }}></h3>
          )}
        </ContentTwo>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  h2 {
    font-weight: 1000;
  }
`;
const Main = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
`;
const Content = styled.div`
  margin: 5rem 0 5rem 0;
`;
const ContentTwo = styled.div`
  display: block;
  margin: 5rem 0 5rem 2rem;
`;
const ButtonPrimary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 2rem;
  padding: 0.4rem;
  margin: 1rem;
  background-color: gray;
  color: white;
  border-radius: 1rem;
  cursor: pointer;
  :hover {
    box-shadow: 1px 1px 1px 1px #494747;
  }
`;
const ButtonSecondary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 2rem;
  padding: 0.4rem;
  margin: 1rem;
  border: 1px solid gray;
  /* background-color: gray; */
  color: gray;
  border-radius: 1rem;
  cursor: pointer;
  :hover {
    box-shadow: 1px 1px 1px 1px #888888;
  }
`;

export default Recipe;
