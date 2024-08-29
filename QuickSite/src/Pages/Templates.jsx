// Templates.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../Pages/Templates.css'; // Optional: Add custom styles here

const Templates = () => {
  return (
    <motion.div
      className="templates-page"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1>Templates</h1>
      <div className="template-gallery">
        <div className="template-card">Template 1</div>
        <div className="template-card">Template 2</div>
        <div className="template-card">Template 3</div>
        <div className="template-card">Template 4</div>
      </div>
    </motion.div>
  );
};

export default Templates;
