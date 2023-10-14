import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {startVoiceCollection, endVoiceCollection} from './scripts/voicetext'
function App() {

  function doThis(){
    return fetch('http://localhost:5000/test')
      .then(response => {
        response.json().then((res) => console.log(res));
      });
  }

  return (

    <>
      <button onClick={startVoiceCollection}>TEST BUTTON</button>
      <button onClick={endVoiceCollection}>STOP</button>
      <button onClick={doThis}>generate response</button>

    </>

  )
}

export default App
