import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import {startVoiceCollection, endVoiceCollection} from './scripts/voicetext'
import Conversation from './pages/conversation';
import Home from "./pages/home";

function App() {


  function doThis(){
    return fetch('http://localhost:5000/test')
      .then(response => {
        response.json().then((res) => console.log(res));
      });
  }


  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/webcam" element={<Conversation />}/>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App

