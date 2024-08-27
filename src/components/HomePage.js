import React from 'react';
import { Link } from 'react-router-dom';
import '../style/HomePage.css';

const HomePage = () => {
  return (
    <div className='header'>
      <h1>Home Page</h1>
      <div className='button-container'>
      <Link to="/add-restaurant">
        <button>Add Restaurant</button>
      </Link>
      <Link to="/restaurant-list">
        <button>Home</button>
      </Link>
      </div>
    </div>
  );
};

export default HomePage;
