// Pricing.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../Pages/Pricing.css'; // Optional: Add custom styles here

const Pricing = () => {
  return (
    <motion.div
      className="pricing-page"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1>Pricing Plans</h1>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h2>Basic</h2>
          <p>$10/month</p>
          <ul>
            <li>Access to basic templates</li>
            <li>SEO tools</li>
            <li>Email support</li>
          </ul>
        </div>
        <div className="pricing-card">
          <h2>Pro</h2>
          <p>$20/month</p>
          <ul>
            <li>All basic features</li>
            <li>Custom domain</li>
            <li>Advanced analytics</li>
          </ul>
        </div>
        <div className="pricing-card">
          <h2>Enterprise</h2>
          <p>$50/month</p>
          <ul>
            <li>All Pro features</li>
            <li>Priority support</li>
            <li>Team collaboration</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Pricing;
