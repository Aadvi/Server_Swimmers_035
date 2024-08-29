// About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1>About Us</h1>
      <p>Learn more about SiteForge and our mission to simplify website creation.</p>
    </motion.div>
  );
};

export default About;
