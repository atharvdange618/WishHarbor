import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserProfile from './components/UserProfile/UserProfile';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />}>
      </Route>
      <Route path="/profile" element={<UserProfile />}>
      </Route>
    </Routes>
  );
};

export default App;
