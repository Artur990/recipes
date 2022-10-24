import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import Favorites from "./Favorites";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:type" element={<Searched />} />
      <Route path="/recipe/:name" element={<Recipe />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default Pages;
