import React from "react";
import { Box, Flex, Button, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import icon from "../assets/Quick.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const MotionBox = motion(Box);

const Navbar = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

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
        <Image src={icon} alt="Quick" />

        <Flex align="center">
          <Link to="/editor">
            <Button mr={4} colorScheme="teal" variant="outline" >
              Studio
            </Button>
          </Link>

          {isAuthenticated ? (
            <>
              <Text mr={4}>Hi, {user.name}!</Text>
              <Button
                ml={4}
                colorScheme="teal"
                variant="outline"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                ml={4}
                colorScheme="teal"
                variant="outline"
                onClick={() => loginWithRedirect()}
              >
                Login
              </Button>
              <Button
                ml={4}
                colorScheme="teal"
                variant="outline"
                onClick={() => loginWithRedirect()}
              >
                Sign Up
              </Button>
            </>
          )}
        </Flex>
      </Flex>
    </MotionBox>
  );
};

export default Navbar;
