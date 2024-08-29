// Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../Pages/Contact.css'; // Optional: Add custom styles here

const Contact = () => {
  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1>Contact Us</h1>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </motion.div>
  );
};

export default Contact;
