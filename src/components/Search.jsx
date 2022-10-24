import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <Content>
          <Button onClick={onSubmit}>
            <AiOutlineSearch />
          </Button>
          <Input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </Content>
      </form>
    </>
  );
};

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 99%;
  background-color: #ffffff;
  margin-top: 3rem;
`;
const Button = styled.button`
  width: 3rem;
  height: 2.5rem;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  background-color: #544747;
  color: white;
  border-color: none;
`;
const Input = styled.input`
  width: 22rem;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  background-color: #544747;
  color: white;
  border-color: none;
`;
export default Search;
