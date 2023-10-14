import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {startVoiceCollection, endVoiceCollection} from './scripts/voicetext'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>

      <button onClick={startVoiceCollection}>TEST BUTTON</button>
      <button onClick={endVoiceCollection}>STOP</button>
    </>

  )
}

export default App
