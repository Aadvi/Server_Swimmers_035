// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Home from './Pages/Home';
import Features from './Pages/Features';
import Templates from './Pages/Templates';
import Pricing from './Pages/Pricing';
import Contact from './Pages/Contact';
import Developer from './Pages/Devleoper';
import Solution from './Pages/Solution';
import About from './Pages/About';
import Login from './Pages/Login';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/pricing" element={<Pricing />} />
      
        <Route path="/solutions" element={<Solution />} />
        <Route path="/about" element={<About />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      {/* You can add the Carousel on specific pages or include it here */}
      <Carousel />
    </Router>
  );
};

export default App;
