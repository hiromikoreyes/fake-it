import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Conversation from './pages/conversation';
import Home from "./pages/home";
import Choice from "./pages/choice";
import Result from "./pages/result";

function App() {

  return (

  <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/choice" element={<Choice />} />
          <Route path="/webcam/:var" element={<Conversation />} />
        </Routes>
      </BrowserRouter>
  </>


  )
}

export default App

