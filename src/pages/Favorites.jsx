import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCusine } from "../redux/action";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  let parms = useParams();

  useEffect(() => {
    dispatch(getCusine(parms.type));
  }, [parms.type]);

  return (
    <Grid>
      {favorites.map((e) => {
        return (
          <Card id={e.id}>
            <Link to={"/recipe/" + e.id}>
              <img src={e.image} alt={e.title} />
              <h4>{e.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
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

export default Favorites;
