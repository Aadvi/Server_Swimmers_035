import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { motion, useAnimation } from "framer-motion";

export const Header = () => {
  const MotionBox = motion(Box);
  const texts = ["developers", "students", "teachers", "merchants"];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const controls = useAnimation();

  React.useEffect(() => {
    const interval = setInterval(() => {
      controls.start({ opacity: 0, transition: { duration: 0.5 } }).then(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        controls.start({ opacity: 1, transition: { duration: 0.5 } });
      });
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, [controls]);
  return (
    <Box bg="#000000" mt="110" h="1000">
      <VStack color="white" textAlign="center" spacing="4" py="28">
        <Heading
          as="h1"
          fontSize="6xl"
          maxW={{ base: "lg", md: "xl", lg: "2xl" }}
        >
          Build Website for{" "}
          <MotionBox
            as="span"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            animate={controls}
            initial={{ opacity: 1 }}
          >
            {texts[currentIndex]}
          </MotionBox>
        </Heading>
        <Text color="whiteAlpha.600" fontSize="2xl">
          Build stunning websites effortlessly with our website builder.
        </Text>
      </VStack>
    </Box>
  );
};
