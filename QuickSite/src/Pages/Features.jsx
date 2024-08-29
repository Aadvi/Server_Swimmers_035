// Features.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../Pages/Features.css'; // Optional: Add custom styles here

const Features = () => {
  return (
    <motion.div
      className="features-page"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1>Features</h1>
      <ul>
        <li>Drag-and-Drop Interface</li>
        <li>Real-Time Preview</li>
        <li>Customizable Templates</li>
        <li>Responsive Design</li>
        <li>SEO Optimization Tools</li>
        <li>Integrated Publishing</li>
      </ul>
    </motion.div>
  );
};

export default Features;
