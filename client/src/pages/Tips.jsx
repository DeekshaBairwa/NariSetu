import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Tips = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#fdf2f6] text-[#111111] flex flex-col justify-between">
      {/* Header (Navbar) */}
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
              className="bg-[#e75c96] text-white font-semibold py-2 px-4 rounded-full"
            >
              Logout
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10 max-w-4xl">
        <h1 className="text-4xl font-semibold text-center mb-4">Empowerment Tips</h1>
        <div className="w-24 h-1 bg-[#e75c96] mx-auto mb-8 rounded-full"></div>

        {/* Precaution Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#e75c96] mb-4">🛡️ Precaution Tips</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 text-left">
            <li>Share your live location with a trusted friend or family member.</li>
            <li>Keep emergency contact numbers saved and accessible.</li>
            <li>Avoid walking alone in isolated areas, especially after dark.</li>
            <li>Use only verified transport apps — and double-check vehicle details.</li>
            <li>Carry a personal safety tool — like a whistle or pepper spray — legally.</li>
            <li>Be aware of exits and people around you in any public space.</li>
          </ul>
        </section>

        {/* Legal Rights Info */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#e75c96] mb-4">📜 Know Your Legal Rights</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 text-left">
            <li>You can file a FIR at any police station — even if the incident happened elsewhere (Zero FIR).</li>
            <li>You have the right to be interviewed by a female police officer in cases involving women.</li>
            <li>Medical examinations must be done in privacy and with dignity.</li>
            <li>You are legally protected when acting in self-defense (Section 100, IPC).</li>
            <li>The Constitution guarantees you equal protection and dignity (Article 15 & Article 21).</li>
          </ul>
        </section>

        {/* Real-life Safe Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#e75c96] mb-4">🌸 Real-Life Safe Practices</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 text-left">
            <li>Agree on a secret code word with your friends/family for emergency signals.</li>
            <li>Use safety apps like Raksha or My Safetipin to alert people in real-time.</li>
            <li>If someone makes you uncomfortable in public, make noise and get attention.</li>
            <li>Prefer well-lit routes and always trust your gut feelings.</li>
            <li>Know your nearest police station, hospital, and women’s helpline center.</li>
          </ul>
        </section>

        {/* Do's and Don'ts Section */}
        <section className="mb-16 text-center">
          <h2 className="text-2xl font-semibold text-[#e75c96] mb-4">✔️ Do's and ❌ Don'ts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-pink-200 transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-[#e75c96] mb-3">✅ Do’s</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-base text-left">
                <li>Speak confidently and firmly when setting boundaries.</li>
                <li>Educate yourself and share accurate info with friends.</li>
                <li>Report unsafe incidents — don’t ignore them.</li>
                <li>Check in with someone when you're out alone.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-pink-200 transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-[#e75c96] mb-3">❌ Don’ts</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-base text-left">
                <li>Don’t misuse your rights to falsely accuse or threaten someone.</li>
                <li>Don’t share personal info with strangers online or offline.</li>
                <li>Don’t freeze in uncomfortable situations — speak up or exit.</li>
                <li>Don’t assume someone else will help — act when you must.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 rounded-t-lg mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 NariSetu. All rights reserved.</p>
          <p className="mt-2 text-sm italic text-gray-400">
            Empowerment comes with responsibility — please don’t misuse your rights. Use them to uplift, not to harm.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Tips;
