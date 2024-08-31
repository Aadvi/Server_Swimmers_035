import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import  { Header } from "./components/Header";
import Form from "./components/Form";
import Carousel from "./components/Carousel";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Carousel/>
        <Form/>
    </div>
  );
};

export default Home;
