import React from 'react';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';

const RestaurantListPage = () => {
  const restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];

  return (
    <div>
      <HomePage />
      <h1>Restaurant List</h1>
      {restaurants.map((restaurant, index) => (
        <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
          <h2>{restaurant.name}</h2>
          <p>{restaurant.description}</p>
          <p>{restaurant.location}</p>
          <Link to={`/edit-restaurant/${index}`}>
            <button>Edit</button>
          </Link>
          <Link to={`/delete-restaurant/${index}`}>
            <button>Delete</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RestaurantListPage;
