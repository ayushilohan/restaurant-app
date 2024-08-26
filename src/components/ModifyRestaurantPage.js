import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';

const EditRestaurantPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState({ name: '', description: '', location: '' });

  useEffect(() => {
    const restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
    setRestaurant(restaurants[id]);
  }, [id]);

  const handleChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
    restaurants[id] = restaurant;
    localStorage.setItem('restaurants', JSON.stringify(restaurants));
    navigate('/restaurant-list');
  };

  return (
    <div>
    <HomePage />
      <h1>Edit Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <label> Name:
          <input type="text" name="name" value={restaurant.name} onChange={handleChange} required/>
        </label>
        <br />
        <label> Description:
          <textarea name="description" value={restaurant.description} onChange={handleChange} required/>
        </label>
        <br />
        <label> Location:
          <input type="text" name="location" value={restaurant.location} onChange={handleChange} required/>
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditRestaurantPage;
