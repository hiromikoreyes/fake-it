import { useState, useRef, useEffect } from 'react';
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
