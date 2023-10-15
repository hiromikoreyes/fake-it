import React, { useState, useEffect } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { Application } from '@splinetool/runtime';


const Home = () => {
    const [isAIEngageVisible, setIsAIEngageVisible] = useState(false);
    const [isHowItWorksVisible, setIsHowItWorksVisible] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const trigger1 = 200; // adjust as per your need
        const trigger2 = 400; // adjust as per your need
    
        if (scrollY > trigger1) {
            setIsAIEngageVisible(true);
        }
    
        if (scrollY > trigger2) {
            setIsHowItWorksVisible(true);
        }
    };
        useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (

      <div className="home-container flex flex-col items-center justify-center p-8">
          <h1 className="font-bold animated-text">Welcome to <span>Fake:It</span></h1>

          <Link to="/choice" className="explore-button bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
            Start Interacting
          </Link>


        <section className={`how-it-works mt-16 ${isHowItWorksVisible ? "visible" : ""}`}>
          <h2 className="text-3xl font-bold mb-4 spinning-text hover-effect">How It Works</h2>
          <p className="focus-in-text hover-effect">
            Our innovative AI utilizes cutting-edge technology to analyze your facial expressions and vocal nuances through your webcam and microphone. Once you start interacting, the AI will adapt its responses according to your emotions and engagement level, providing a unique, immersive, and engaging conversational experience. It's not just a chat; it's a dynamic interaction crafted just for you to boost your confidence and mental health.
          </p>
        </section>
        <footer className="mt-16">
          <p>Created by Miko, Isaiah, Alvin, and Joshua</p>
        </footer>
      </div>
    );
  };


export default Home;
