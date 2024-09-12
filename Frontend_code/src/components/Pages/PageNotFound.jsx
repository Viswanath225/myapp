import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.text}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.link}>
        Go back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
  },
  heading: {
    fontSize: '6rem',
    margin: '0',
    color: '#ff6b6b',
  },
  text: {
    fontSize: '1.5rem',
    color: '#333',
  },
  link: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};


