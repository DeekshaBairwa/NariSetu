import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

const HomePage = ({ onLogout }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // If already saved in localStorage, use it
        const localName = localStorage.getItem('username');
        if (localName) {
          setUsername(localName);
          return;
        }

        // Else fetch from backend (if using sessions/cookies)
        const res = await axios.get('http://localhost:5000/api/auth/user');
        setUsername(res.data.username);
        localStorage.setItem('username', res.data.username); // Optional: save it
      } catch (error) {
        console.error("Could not fetch user data:", error);
        navigate('/login'); // redirect to login if not authenticated
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    if (onLogout) onLogout();
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-[#111111]">
      {/* Header */}
      <header className="bg-[#fdf2f6] shadow-sm py-4">
        <nav className="container mx-auto px-4 flex justify-between items-center flex-wrap h-20">
          <div className="flex items-center mb-2 md:mb-0">
            <img
              src="/NavBar_logo.png"
              alt="NariSetu Logo"
              className="w-15 h-20 mr-2 ml-4 mt-2.5 object-contain"
            />
            <div className="flex flex-col">
              <h1 className="text-4xl font-semibold text-[#111111] mb-6">NariSetu</h1>
              <p className="text-base italic font-bold text-[#e75c96] ml-1 -mt-6">A path to preparedness</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link to="/home" className="bg-[#e75c96] text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">Home</Link>
            <Link to="/simulations" className="bg-[#e75c96] text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">Simulations</Link>
            <Link to="/tips" className="bg-[#e75c96] text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">Tips</Link>
            <Link to="/helpline" className="bg-[#e75c96] text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">Helpline</Link>
            <button
              onClick={handleLogout}
              className="bg-[#e75c96] text-white font-semibold py-2 px-4 rounded-full hover:shadow-xl transition-all duration-300"
            >
              Logout
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-24 text-center shadow-inner bg-[#fdf2f6]">
        <div className="container mx-auto px-4 max-w-4xl">
          {username && (
            <h2 className="text-2xl md:text-3xl font-semibold text-[#e75c96] mb-8">
              Hi {username}, Welcome to <span className="font-semibold text-[#111111]">NariSetu!</span>
            </h2>
          )}
          <h1 className="text-4xl md:text-5xl font-semibold text-[#111111] leading-tight mb-6">
            Empower Yourself with Awareness
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-9 max-w-3xl mx-auto">
            NariSetu is your digital guide to navigating real-life situations with confidence. Learn how to respond smartly, stay safe, and build awareness through interactive learning.
          </p>
          <Link to="/simulations" className="bg-[#e75c96] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Start Simulation
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-1 px-4 bg-[#fdf2f6]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-semibold text-[#111111] mb-4 text-center">What is NariSetu?</h2>
          <div className="w-24 h-1 bg-[#e75c96] mx-auto mb-6 rounded-full"></div>
           <p className="text-lg text-gray-700 leading-relaxed text-center">
            NariSetu is a safety-awareness platform dedicated to empowering young girls. Through real-world inspired simulations and precaution-based learning, it helps users recognize uncomfortable or risky scenarios and respond confidently — without fear, and without hesitation.
            <br />
            Every experience here is meant to strengthen your intuition and remind you that awareness is the first step to protection.
          </p>
          <div className="container mx-auto max-w-4xl text-center italic text-xl md:text-2xl text-[#e75c96] font-semibold mt-6">
            <p className="relative inline-block px-4 py-2">
              <span className="absolute left-0 top-0 text-4xl leading-none opacity-50">“</span>
              Awareness is your greatest safety tool.
              <span className="absolute right-0 bottom-0 text-4xl leading-none opacity-50">”</span>
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 px-4 bg-[#fdf2f6]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white shadow-xl rounded-2xl p-8 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <h2 className="text-4xl font-semibold text-[#111111] mb-4 text-center">Key Features</h2>
            <div className="w-24 h-1 bg-[#e75c96] mx-auto mb-6 rounded-full"></div>
             <ul className="list-disc text-lg text-gray-700 leading-relaxed ml-12">
              <li><strong>Interactive Simulations:</strong> Explore real-world situations and choose how to respond, all in a virtual safe space.</li>
              <li><strong>Progress Summary:</strong> Track how your choices evolve and what they reveal about your safety awareness.</li>
              <li><strong>Everyday Tips & Precautions:</strong> Gain clear, practical guidance for navigating daily life with confidence.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Motivation Section */}
      <section className="text-center py-6 px-4 bg-[#fdf2f6]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-semibold text-[#111111] mb-4 text-center">
            Your journey to confidence begins here.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Every step you take with NariSetu makes you stronger, wiser, and more aware. You're not just learning safety — you're building strength that stays with you for life.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 rounded-t-lg mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 NariSetu. All rights reserved.</p>
          <p className="mt-2 text-sm italic text-gray-400">Awareness is the first step toward empowerment.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
