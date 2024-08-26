import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomePage from './HomePage';

const AddRestaurantPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage or state management solution here
    const restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
    restaurants.push({ name, description, location });
    localStorage.setItem('restaurants', JSON.stringify(restaurants));
    navigate('/restaurant-list');
  };

  return (
    <div>
    <HomePage />
      <h1>Add Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddRestaurantPage;
