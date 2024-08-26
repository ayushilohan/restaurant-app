import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';

const DeleteRestaurantPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    const restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
    restaurants.splice(id, 1);
    localStorage.setItem('restaurants', JSON.stringify(restaurants));
    navigate('/restaurant-list');
  };

  return (
    <div>
    <HomePage />
      <h1>Are you sure you want to delete this restaurant?</h1>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={() => navigate('/restaurant-list')}>No</button>
    </div>
  );
};

export default DeleteRestaurantPage;