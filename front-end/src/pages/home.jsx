import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to FakeIt</h1>
      <p className="text-lg mb-8">
        Engage with our friendly AI! Just turn on your webcam and microphone, and our AI
        will analyze your expressions, encouraging you with a little chat.
      </p>
      <Link to="/choice" className="explore-button bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
        Start Interacting
      </Link>
    </div>
  );
};

export default Home;
