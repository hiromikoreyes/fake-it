import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {startVoiceCollection, endVoiceCollection} from './scripts/voicetext'
import { generateCharacterResponse } from './scripts/generate'
function App() {

  function doThis(){
    generateCharacterResponse("what's up").then(res => {
      console.log(res)
    })
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
