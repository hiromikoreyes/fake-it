import { useState, useRef, useEffect } from 'react'
import * as faceapi from 'face-api.js'
import { scoreEvaluation } from '../scripts/evaluate'
import { startVoiceCollection, endVoiceCollection } from '../scripts/voicetext';

let score = 0;

export default function Webcam(){

    
    const [count, setCount] = useState(0)
    const videoRef = useRef()
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

    var curr_score = 0;
    var num_eval = 0;
    var total_num_eval = 0


    const faceMyDetect = ()=>{
    setInterval(async()=>{

        //timing func
        const detections = await faceapi.detectAllFaces(videoRef.current,
        new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()

        

        try{
            curr_score = curr_score + scoreEvaluation(detections["0"]["expressions"].happy, detections["0"]["expressions"].surprised,detections["0"]["expressions"].neutral);
            num_eval += 1;


            if(num_eval % 30 == 0){
                score = curr_score / num_eval;
                document.getElementById("number").textContent=score
                total_num_eval += num_eval
                // console.log({"score": score, "evals": total_num_eval})
                num_eval = 0
                curr_score = 0
            }

        } catch(error) {
            // console.error("detection no existo" + " " + error)
        }

    }, 60)
    }
    return(
        <>
            <h1>Face Detection</h1>
            <div className="appvide">
                <div id="number" style={{visibility: 'hidden'}}>0</div>
                <button onClick={startVoiceCollection}>TEST BUTTON</button>
                <button onClick={endVoiceCollection}>STOP</button>
            </div>
            <video style={{width: "500px"}} crossOrigin="anonymous" ref={videoRef} autoPlay></video>
        </>
    )
}

export function getCurrentMood(){
    return document.getElementById("number").textContent=score
}