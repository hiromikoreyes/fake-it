import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import {startVoiceCollection, endVoiceCollection} from './scripts/voicetext'
import Conversation from './pages/conversation';
import Home from "./pages/home";
import Choice from "./pages/choice";

function App() {

  return (

  <>
    {<BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/choice" element={<Choice/>} />
          <Route path="/webcam" element={<Conversation />} />
        </Routes>
      </BrowserRouter>}
  </>


  )
}

export default App

