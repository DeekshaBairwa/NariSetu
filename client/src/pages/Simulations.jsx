import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const questions = [
  {
    question: "You book a cab, and the driver suddenly changes route without telling you. What should you do?",
    options: [
      "a. Ignore it, maybe it's a shortcut",
      "b. Start a phone call and share your live location loudly",
      "c. Yell at the driver immediately"
    ],
    correctAnswer: 1,
    explanation: "Calmly sharing your location on a call shows you're alert and being tracked, which often stops bad intentions."
  },
  {
    question: "In a crowded metro, someone keeps brushing against you again and again. What will you do?",
    options: [
      "a. Think it's by mistake and ignore it",
      "b. Change your position and look them in the eye",
      "c. Get down at the next stop immediately"
    ],
    correctAnswer: 1,
    explanation: "Changing position and eye contact signals you're aware — it can discourage the person without confrontation."
  },
  {
    question: "During an online class, someone suddenly shares an inappropriate screen. What should be your action?",
    options: [
      "a. Exit the class and inform your teacher",
      "b. Wait to see if it stops",
      "c. Ignore, maybe it was by mistake"
    ],
    correctAnswer: 0,
    explanation: "It’s best to leave such situations quickly and report them so others are also protected."
  },
  {
    question: "You're walking home, and a stranger is filming you on their phone. What do you do?",
    options: [
      "a. Ask them to delete it right away",
      "b. Walk away quickly without reacting",
      "c. Take a photo of them and report it"
    ],
    correctAnswer: 2,
    explanation: "Avoid direct fight, but capture evidence safely and report it for your protection."
  },
  {
    question: "Your cold drink tastes strange at a function. What would you do?",
    options: [
      "a. Throw it away and tell a trusted person",
      "b. Give it to someone else to check",
      "c. Drink it anyway, maybe it’s just different"
    ],
    correctAnswer: 0,
    explanation: "Even in familiar places, trust your instincts. Don’t take risks with safety."
  },
  {
    question: "It’s late, you’re leaving the library, and someone insists on walking with you despite saying no. What now?",
    options: [
      "a. Keep saying no and walk fast",
      "b. Record audio quietly and walk anyway",
      "c. Go back inside and call someone to pick you"
    ],
    correctAnswer: 2,
    explanation: "Avoid walking with strangers. Call someone or wait in a safe, well-lit place."
  },
  {
    question: "You think someone leaked your personal photo. What’s the very first step?",
    options: [
      "a. Message and confront the person",
      "b. Delete your account out of fear",
      "c. Save proof and report it as cybercrime"
    ],
    correctAnswer: 2,
    explanation: "Stay calm, collect evidence, and report. You have full rights to protect yourself."
  },
  {
    question: "At a gathering, someone you just met hands you an open drink and urges you to try it, saying 'everyone else is.' What's your best move?",
    options: [
      "a. Take a small sip to be polite.",
      "b. Politely refuse and get your own sealed drink.",
      "c. Accept it but don't drink it."
    ],
    correctAnswer: 1,
    explanation: "Always be cautious with open drinks from strangers. It's safer to get your own drink directly from a trusted source."
  },
  {
    question: "An acquaintance casually puts their hand on your lower back or waist in a way that makes you uncomfortable. What should you do?",
    options: [
      "a. Freeze and pretend it didn't happen.",
      "b. Gently remove their hand and create some space.",
      "c. Loudly confront them immediately."
    ],
    correctAnswer: 1,
    explanation: "It's important to assert your personal space. A gentle but firm action is often enough to set a boundary without escalation."
  },
  {
    question: "You're alone and notice the same car or person repeatedly appearing in your vicinity. What do you do?",
    options: [
      "a. Dismiss it as a coincidence.",
      "b. Go to a safe, public place, call someone, and alert people around you.",
      "c. Directly ask the person why they are following you."
    ],
    correctAnswer: 1,
    explanation: "Being vigilant about your safety is important. Moving to a safe location and informing others is always a better option."
  },
  {
    question: "A stranger online offers you a modeling or job opportunity that seems too good to be true. What's your course of action?",
    options: [
      "a. Immediately provide all your details and accept the offer.",
      "b. Thoroughly research the offer and consult with a trusted adult.",
      "c. Block them instantly."
    ],
    correctAnswer: 1,
    explanation: "Be extremely cautious with online offers that seem too good to be true. Always verify information and seek advice from a trusted person."
  },
  {
    question: "Your partner constantly dismisses your feelings and tells you that you are 'overreacting.' What should you do?",
    options: [
      "a. Doubt your feelings and stay silent.",
      "b. Communicate how their words make you feel and seek support if needed.",
      "c. Argue with them and try to prove them wrong."
    ],
    correctAnswer: 1,
    explanation: "Your feelings are valid. It's important to communicate your concerns to your partner and seek external help if necessary."
  },
  {
    question: "During an internship, your supervisor asks you to run personal errands. What should you do?",
    options: [
      "a. Do it, it might help your career.",
      "b. Politely state it's outside your duties and ask about your official tasks.",
      "c. Ignore the request and hope they forget."
    ],
    correctAnswer: 1,
    explanation: "It's important to understand and stick to your job responsibilities. Politely setting boundaries ensures professional conduct."
  },
  {
    question: "Your new boyfriend/girlfriend 'forgets' their wallet constantly and expects you to pay. What’s your approach?",
    options: [
      "a. Keep paying to keep the relationship smooth.",
      "b. Have an open conversation about finances and set clear boundaries.",
      "c. Quietly distance yourself from them."
    ],
    correctAnswer: 1,
    explanation: "Financial clarity and equality are crucial in relationships. It's important to express your concerns and establish healthy boundaries."
  },
  {
    question: "A close friend posts a picture of you online that you explicitly asked them not to. What's your next step?",
    options: [
      "a. Ignore it, maybe they forgot.",
      "b. Talk to your friend privately and ask them to remove it.",
      "c. Publicly comment on their post in anger."
    ],
    correctAnswer: 1,
    explanation: "Maintaining your privacy is important. Communicating directly and privately with your friend is the most respectful and effective way to handle it."
  }
];

const Simulations = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [feedbackVisible, setFeedbackVisible] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session (adjust key as per your setup)
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleOptionClick = (index) => {
    setSelected(index);
    setShowExplanation(true);
    if (index === questions[currentQ].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelected(null);
    setShowExplanation(false);
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setFeedbackVisible(true);
    }
  };

  const feedbackMessage = score >= 8
    ? "You're alert and aware — keep trusting your instincts and helping others too!"
    : "You're learning, and that’s powerful. Every step makes you safer and stronger. Keep going!";

  return (
    <div className="flex flex-col min-h-screen bg-[#fdf2f6] text-[#111111]">
      {/* Navbar */}
      <header className="bg-[#fdf2f6] shadow-sm py-4">
        <nav className="container mx-auto px-4 flex justify-between items-center flex-wrap h-20">
          <div className="flex items-center">
            <img src="/NavBar_logo.png" alt="Logo" className="w-15 h-20 mr-2 ml-4 mt-2.5 object-contain" />
            <div className="flex flex-col">
              <h1 className="text-4xl font-semibold text-[#111111] mb-6">NariSetu</h1>
              <p className="text-base italic font-bold text-[#e75c96] ml-1 -mt-6">A path to preparedness</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link to="/home" className="bg-[#e75c96] text-white py-2 px-4 rounded-full">Home</Link>
            <Link to="/simulations" className="bg-[#e75c96] text-white py-2 px-4 rounded-full">Simulations</Link>
            <Link to="/tips" className="bg-[#e75c96] text-white py-2 px-4 rounded-full">Tips</Link>
            <Link to="/helpline" className="bg-[#e75c96] text-white py-2 px-4 rounded-full">Helpline</Link>
            <button
              onClick={handleLogout}
              className="bg-[#e75c96] text-white py-2 px-4 rounded-full"
            >
              Logout
            </button>
          </div>
        </nav>
      </header>

      {/* Main Section */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h2 className="text-4xl font-semibold mb-2 text-center">Simulations</h2>
        <div className="w-24 h-1 bg-[#e75c96] mx-auto mb-6 rounded-full"></div>

        {!feedbackVisible ? (
          <>
            <h3 className="text-2xl font-semibold mb-4 ">Question {currentQ + 1}:</h3>
            <p className="text-lg font-medium mb-6">{questions[currentQ].question}</p>

            <div className="space-y-4">
              {questions[currentQ].options.map((opt, idx) => {
                const isCorrect = idx === questions[currentQ].correctAnswer;
                const isSelected = idx === selected;
                const baseClasses = "block w-full py-3 px-5 rounded-lg text-left border";
                const selectedClasses =
                  isSelected && isCorrect
                    ? "bg-green-100 border-green-500"
                    : isSelected && !isCorrect
                      ? "bg-red-100 border-red-500"
                      : !isSelected && isCorrect && showExplanation
                        ? "bg-green-50 border-green-300"
                        : "bg-white border-gray-300";

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(idx)}
                    className={`${baseClasses} ${selectedClasses}`}
                    disabled={showExplanation}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div className="mt-4 bg-white p-4 border-l-4 border-[#e75c96]">
                <strong>Explanation:</strong> {questions[currentQ].explanation}
                <div className="mt-4">
                  <button
                    onClick={nextQuestion}
                    className="bg-[#e75c96] text-white px-6 py-2 rounded-full mt-2"
                  >
                    {currentQ + 1 < questions.length ? "Next" : "Show Feedback"}
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-3xl font-semibold mb-4">Simulation Completed!</h3>
            <p className="text-xl font-medium mb-4">
              You answered {score} out of {questions.length} correctly.
            </p>
            <p className="italic text-lg text-[#e75c96]">
              {feedbackMessage}
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 rounded-t-lg">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 NariSetu. All rights reserved.</p>
          <p className="mt-2 text-sm italic text-gray-400">
            Real strength is knowing your rights, and using them wisely.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Simulations;
