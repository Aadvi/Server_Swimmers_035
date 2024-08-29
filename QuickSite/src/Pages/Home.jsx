// Home.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1>Welcome to SiteForge</h1>
      <p>Create and customize your websites effortlessly!</p>
    </motion.div>
  );
};

export default Home;
