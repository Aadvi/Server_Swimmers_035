import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import  { Header } from "./components/Header";
import Form from "./components/Form";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Form/>
    </div>
  );
};

export default Home;
