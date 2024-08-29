// Solution.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Solution = () => {
  return (
    <motion.div
      className="solution-page"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1>Solutions</h1>
      <p>Explore tailored solutions for your business needs.</p>
    </motion.div>
  );
};

export default Solution;
