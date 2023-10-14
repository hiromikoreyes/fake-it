import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import {startVoiceCollection, endVoiceCollection} from './scripts/voicetext'
import Conversation from './pages/conversation';
import Home from "./pages/home";

function App() {

  return (

    <>
      <div className='gradient_background'>
        {<BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webcam" element={<Conversation />} />
        </Routes>
      </BrowserRouter>}
      </div>
      
  </>


  )
}

export default App

