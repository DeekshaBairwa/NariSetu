import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

const Helpline = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail') || localStorage.getItem('username');
    if (storedEmail) setEmail(storedEmail);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('username');
    navigate('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://narisetu-backend.onrender.com/api/feedback/submit', {
        email,
        experience,
        suggestions,
      });

      if (res.status === 200 || res.status === 201) {
        setMessage('✅ Thank you for your feedback!');
        setExperience('');
        setSuggestions('');
      } else {
        setMessage('❌ Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Feedback error:', error);
      setMessage('❌ Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf2f6] text-[#111111] flex flex-col justify-between">
      {/* Navbar */}
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 max-w-4xl">
        <h1 className="text-4xl font-semibold text-center mb-4">Emergency & Women Safety Helplines</h1>
        <div className="w-24 h-1 bg-[#e75c96] mx-auto mb-8 rounded-full"></div>

        {/* Helpline Cards */}
        <section className="grid gap-6 mb-12">
          {[
            { title: 'Women Helpline (All India)', number: '1091' },
            { title: 'Police Emergency Number', number: '100' },
            { title: 'National Commission for Women', number: '011-26942369 / 26944754' },
            { title: 'Child Helpline', number: '1098' },
            { title: 'National Cyber Crime Helpline', number: '1930' },
            { title: 'National Emergency Number', number: '112' },
            { title: 'Mental Health Support (iCall)', number: '+91-9152987821' },
          ].map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md border border-pink-200 transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-[#e75c96] mb-1">{item.title}</h3>
              <p className="text-gray-700">📞 {item.number}</p>
            </div>
          ))}
        </section>

        {/* Feedback Form */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-center mb-3">We Value Your Feedback</h2>
          <div className="w-24 h-1 bg-[#e75c96] mx-auto mb-8 rounded-full"></div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-5 max-w-2xl mx-auto">
            <div>
              <label className="block font-medium mb-1">Your Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border border-gray-300 p-2 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Your Experience</label>
              <textarea
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="How was your experience using NariSetu?"
                className="w-full border border-gray-300 p-2 rounded-md h-24"
                required
              ></textarea>
            </div>
            <div>
              <label className="block font-medium mb-1">Suggestions for Us</label>
              <textarea
                value={suggestions}
                onChange={(e) => setSuggestions(e.target.value)}
                placeholder="Any suggestions or improvements?"
                className="w-full border border-gray-300 p-2 rounded-md h-24"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#e75c96] text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Submit Feedback
              </button>
            </div>
            {message && <p className="text-center text-green-600 font-medium mt-2">{message}</p>}
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 rounded-t-lg mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 NariSetu. All rights reserved.</p>
          <p className="mt-2 text-sm italic text-gray-400">"In helping others, we find the courage to help ourselves."</p>
        </div>
      </footer>
    </div>
  );
};

export default Helpline;
