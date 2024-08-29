// Developer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Developer = () => {
  return (
    <motion.div
      className="developer-page"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1>Developer Tools and Resources</h1>
      <p>Access API documentation, SDKs, and more.</p>
    </motion.div>
  );
};

export default Developer;
