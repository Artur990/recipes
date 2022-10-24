import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { BsHeart } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Category = () => {
  return (
    <List>
      <NavListy to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavListy>
      <NavListy to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </NavListy>
      <NavListy to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavListy>
      <NavListy to={"/cuisine/Chinese "}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </NavListy>
      <NavListy to={"/cuisine/favorites "}>
        <BsHeart />
        <h4>Favorites</h4>
      </NavListy>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const NavListy = styled(NavLink)`
  width: 5rem;
  height: 5rem;
  border-radius: 3rem;
  background-color: #3a3434;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0rem 1rem;
  outline-offset: none;
  :hover {
    background-color: #cf7911;
    text-decoration: none;
  }
  h4 {
    margin: 0;
    color: white;
  }
  path {
    color: white;
  }
`;
export default Category;
