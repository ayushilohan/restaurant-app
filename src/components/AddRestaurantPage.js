import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import '../style/AddRestaurant.css';

const AddRestaurantPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
    restaurants.push({ name, description, location });
    localStorage.setItem('restaurants', JSON.stringify(restaurants));
    navigate('/restaurant-list');
  };

  return (
    <div>
    <HomePage />
    <div className='form-container'>
      <h1>Add Restaurant</h1>
      <div className='form-group'>
      <form onSubmit={handleSubmit}>
        <label> Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label> Description:
          <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <br />
        <label> Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      </div>
      </div>
    </div>
  );
};

export default AddRestaurantPage;
