import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/add-restaurant">
        <button>Add Restaurant</button>
      </Link>
      <Link to="/restaurant-list">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default HomePage;
