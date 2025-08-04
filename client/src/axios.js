// src/axios.js
import axios from 'axios';

const isProd = import.meta.env.PROD;

const instance = axios.create({
  baseURL: isProd
    ? 'https://narisetu-backend.onrender.com'
    : 'http://localhost:5000',
  withCredentials: true
});

export default instance;
