import '../App.css'
import Character from '../components/character'
import Webcam, { getCurrentMood } from '../components/webcam';

function Home() {
  return (
    <>
      <Character/>
      <Webcam/>
    </>
  )
}

export default Home

