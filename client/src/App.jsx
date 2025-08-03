import React from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/Signup';
import LoginPage from './pages/LoginPage';
import Simulations from './pages/Simulations';
import Tips from './pages/Tips';
import Helpline from './pages/Helpline';

// Logout Component to clear data and redirect
function Logout() {
  const navigate = useNavigate();

  React.useEffect(() => {
    // Clear any auth tokens or session info
    localStorage.clear();  // or sessionStorage.clear() based on your auth handling

    // Redirect to login page
    navigate('/login');
  }, [navigate]);

  return null; // This page doesn't show anything, just redirects
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/simulations" element={<Simulations />} />
      <Route path="/tips" element={<Tips />} />
      <Route path="/helpline" element={<Helpline />} />
      <Route path="/logout" element={<Logout />} /> {/* Logout route added */}
    </Routes>
  );
}
