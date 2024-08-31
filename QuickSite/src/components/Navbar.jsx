import React from "react";
import { Box, Flex, Button, useDisclosure, Image, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import icon from "../assets/Quick.png";
import { Link } from "react-router-dom";


const MotionBox = motion(Box);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <MotionBox
      as="nav"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      position="fixed"
      top="0"
      width="100%"
      p={4}
      bg="#000000"
      color="white"
      boxShadow="md"
    >
      <Flex justify="space-between" align="center">
        <Image src={icon} />

        <Flex>
          <Link to="/editor">
            <Button
              mr={4}
              colorScheme="teal"
              variant="outline"
              onClick={onOpen}
            >
              Studio
            </Button>
          </Link>
          <Button colorScheme="teal" variant="outline">
            Sign Up
          </Button>
          <Button ml={4} colorScheme="teal" variant="outline">
            Login
          </Button>
        </Flex>
      </Flex>
      
    </MotionBox>
  );
};

export default Navbar;
