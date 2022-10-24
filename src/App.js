import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import Category from "./components/Category";

import Search from "./components/Search";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <Link to="/">
        <Title>Recipes</Title>
      </Link>
      <Search />
      <Category />
      <Pages />
    </div>
  );
}
const Title = styled.h1`
  font-weight: bold;
  position: absolute;
  left: 100px;
  top: 30px;
`;

export default App;
