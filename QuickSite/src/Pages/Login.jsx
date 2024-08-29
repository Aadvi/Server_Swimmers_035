import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

// Inline styles
const styles = {
  loginPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  },
  nav: {
    width: '100%',
    padding: 0,
    margin: 0,
    position: 'relative',
  },
  navUl: {
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    listStyle: 'none',
    backgroundColor: '#fff',
    borderRadius: '100px',
    height: '80px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundImage: 'radial-gradient(ellipse 150px 100px at center bottom, white 8%, rgba(255, 255, 255, 0.2) 100%)',
    backgroundPosition: 'center center',
    position: 'relative',
  },
  navLi: {
    padding: '1em',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navA: {
    display: 'block',
    color: '#333',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    position: 'relative',
    zIndex: 10,
  },
  loginFormContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '2em',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    margin: 'auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  input: {
    marginBottom: '1em',
    padding: '0.75em',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  button: {
    position: 'relative',
    padding: '0.75em',
    border: 'none',
    borderRadius: '100px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '1em',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    overflow: 'hidden', // Ensure the swipe effect stays within the button
    width: '100%',
    height: '50px', // Fixed height for button
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
  },
  buttonOverlay: {
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    backgroundColor: '#0056b3',
    transition: 'left 0.5s ease',
  },
  navUlBefore: {
    content: '""',
    display: 'block',
    position: 'absolute',
    background: 'var(--body-bg-color)',
    top: '1px',
    borderRadius: '100px',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
};

const Login = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    // GSAP Animation for the navigation
    gsap.fromTo(
      '.nav ul',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // GSAP Animation for the login button
    gsap.fromTo(
      '.login-form button',
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  const handleLoginClick = () => {
    setIsLoggingIn(true);

    // GSAP animation for the swipe effect from left to right
    gsap.to('.button-overlay', {
      left: '0%',
      duration: 0.5,
      ease: 'power3.out',
      onComplete: () => {
        // Simulate login process
        setTimeout(() => {
          setIsLoggingIn(false);
          // Redirect or show a success message
          alert('Logged in!');
        }, 500); // Simulating network delay
      },
    });
  };

  return (
    <div style={styles.loginPage}>
      {/* Navigation Component */}
      <div style={styles.nav}>
        <ul style={styles.navUl}>
          <li style={styles.navLi}><a href="#home" style={styles.navA}>Home</a></li>
          <li style={styles.navLi}><a href="#about" style={styles.navA}>About</a></li>
          <li style={styles.navLi}><a href="#contact" style={styles.navA}>Contact</a></li>
        </ul>
        <div style={styles.navUlBefore}></div>
      </div>

      {/* Login Form */}
      <motion.div
        style={styles.loginFormContainer}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1>Login</h1>
        <form className="login-form" style={styles.form}>
          <input type="email" placeholder="Email" required style={styles.input} />
          <input type="password" placeholder="Password" required style={styles.input} />
          <button 
            type="button"
            onClick={handleLoginClick}
            style={styles.button}
          >
            {isLoggingIn ? 'Logging In...' : 'Confirm'}
            <div className="button-overlay" style={styles.buttonOverlay}></div>
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
