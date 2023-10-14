import { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Webcam, { getCurrentMood } from '../components/webcam';
import './conversation.css'

function Conversation() {
  return (
    <>
      <div className='biggest-container'>
        <div className="left-content">

        <div className="logo">
          <h1>FakeIt</h1>
        </div>

        <div className='Webcam'>
          <Webcam />
        </div>
        <div className='mic'>
        <h1 MIC> </h1>
        </div>
        </div>
      </div>

      <div className='right-content'>
        <div className='persona'>
          <h2 Persona></h2>
        </div>
        <div className='chat'>
          <h2 chat> </h2>
        </div>
      </div>
      <button onClick={getCurrentMood}>test</button>
    </>
  );
}

export default Conversation;
