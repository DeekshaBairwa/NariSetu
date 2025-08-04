import React, { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";

// Step 3: Include withCredentials globally for cookie handling
axios.defaults.withCredentials = true;

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'https://narisetu-backend.onrender.com/api/auth/login',
        {
          email: formData.email,
          password: formData.password
        }
      );

      localStorage.setItem('username', res.data.username); // Store username
      navigate('/home'); // Redirect to homepage
    } catch (err) {
      console.error('Login Error:', err.response?.data?.message || err.message);
      alert(err.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf2f6]">
      <div className="bg-[#fff5fb] shadow-xl rounded-2xl px-8 py-12 w-full max-w-md">
        <div className="flex flex-col items-center">
          <img src="/Signup_Logo.png" alt="NariSetu Logo" className="w-28 h-28 mb-[-20px]" />
          <h1 className="text-2xl font-serif text-[#111111] font-semibold -mt-2">
            Welcome to NariSetu!
          </h1>
          <p className="text-[18px] text-[#e75c96] italic mt-1 mb-4">
            A path to preparedness
          </p>
        </div>

        <form className="space-y-6 pt-4 pb-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-[#111] font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-[#fff5fb] border border-gray-300 rounded-xl focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[#111] font-medium mb-1">Password</label>
            <input
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-[#fff5fb] border border-gray-300 rounded-xl focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#e75c96] text-white font-semibold py-2 rounded-xl hover:opacity-90 transition"
          >
            Log In
          </button>

          <p className="text-sm text-center text-[#111] mt-2">
            Don't have an account?{" "}
            <Link to="/" className="text-[#e75c96] font-medium underline">Create account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
