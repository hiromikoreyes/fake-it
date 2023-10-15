import { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Webcam, { getCurrentMood } from '../components/webcam';

function Conversation(){
  return (
    <>
      <div>
        <Webcam/>
      </div>
    </>
  )
}



export default Conversation;
