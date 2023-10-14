import '../App.css'
import {startVoiceCollection, endVoiceCollection} from '../scripts/voicetext'

function Home() {
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
      <a href="/webcam">webcam</a>
    </>

  )
}

export default Home

