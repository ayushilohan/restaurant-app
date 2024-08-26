import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRestaurantPage from './components/AddRestaurantPage.js';
import RestaurantListPage from './components/RestaurantListPage.js';
import EditRestaurantPage from './components/ModifyRestaurantPage.js';
import HomePage from './components/HomePage.js';
import DeleteRestaurantPage from './components/DeleteRestaurantPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-restaurant" element={<AddRestaurantPage />} />
        <Route path="/restaurant-list" element={<RestaurantListPage />} />
        <Route path="/edit-restaurant/:id" element={<EditRestaurantPage />} />
        <Route path="/delete-restaurant/:id" element={<DeleteRestaurantPage />} />
      </Routes>
    </Router>
  );
}

export default App;
