import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Popular from "../components/Popular";
import Search from "../components/Search";
import Veggie from "../components/Veggie";
const Home = () => {
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 1 }}
        exsite={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Content>
          <Popular />
          <Veggie />
        </Content>
      </motion.div>
    </>
  );
};
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
`;

export default Home;
