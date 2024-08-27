import React from 'react';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';
import '../style/RestaurantList.css';

const RestaurantListPage = () => {
  const restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];

  return (
    <div>
      <HomePage />
      <h1>Restaurant List</h1>
      <div className='list-container'>
      {restaurants.map((restaurant, index) => (
        <div key={index} className='list-item'>
          <p>{restaurant.name}</p>
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
    </div>
  );
};

export default RestaurantListPage;
