import { useState, useRef, useEffect } from 'react'
import './App.css'
import * as faceapi from 'face-api.js'
import {startVoiceCollection, endVoiceCollection} from './scripts/voicetext'


function App() {
  const [count, setCount] = useState(0)
  const videoRef =useRef()
  const canvasRef = useRef()

  useEffect(()=>{
    startVideo()
    videoRef && loadModels()
  },[])

  const startVideo = ()=>{
    navigator.mediaDevices.getUserMedia({video:true})
    .then((currentStream)=>{
      videoRef.current.srcObject = currentStream
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  const loadModels = ()=>{
    Promise.all([
      // THIS FOR FACE DETECT AND LOAD FROM YOU PUBLIC/MODELS DIRECTORY
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models")

      ]).then(()=>{
      faceMyDetect()
    })
  }

  const faceMyDetect = ()=>{
    setInterval(async()=>{
      const detections = await faceapi.detectAllFaces(videoRef.current,
        new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()

      // DRAW YOU FACE IN WEBCAM
      canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(videoRef.current)
      faceapi.matchDimensions(canvasRef.current,{
        width:940,
        height:650
      })

      const resized = faceapi.resizeResults(detections,{
         width:940,
        height:650
      })

      faceapi.draw.drawDetections(canvasRef.current,resized)
      faceapi.draw.drawFaceLandmarks(canvasRef.current,resized)
      faceapi.draw.drawFaceExpressions(canvasRef.current,resized)


    },1000)
  }

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
      
      <h1>Face Detection</h1>
      <div className="appvide">
        
      <video crossOrigin="anonymous" ref={videoRef} autoPlay></video>
      </div>
      <canvas ref={canvasRef} width="940" height="650"
      className="appcanvas"/>
      
    </>

  )
}

export default App

