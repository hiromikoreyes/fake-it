import { useState, useRef, useEffect } from 'react'
import * as faceapi from 'face-api.js'
import { scoreEvaluation } from '../scripts/evaluate'
import {startVoiceCollection, endVoiceCollection, setPersona, initPersonaPrompts} from '../scripts/voicetext'
import styles from './webcam.css';

let score = 0;
const value = [];

export default function Webcam(){
    const [chatResponse, setChatResponse] = useState("");
    const updateChatResponse = (response) => {
        setChatResponse(response);
    }


    const [count, setCount] = useState(0)
    const videoRef = useRef()
    const url = window.location.href
    const parts = url.split("/");
    const lastPart = parts[parts.length - 1];


    useEffect(()=>{
        setPersona(lastPart)
        initPersonaPrompts()
        window.updateChatResponse = updateChatResponse;
        startVideo()
        videoRef && loadModels()
        return () => {
            window.updateChatResponse = null;
        };
    }, []);

    const startVideo = ()=>{
    navigator.mediaDevices.getUserMedia({video:true})
    .then((currentStream)=>{
        videoRef.current.srcObject = currentStream
        startVoiceCollection()

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

        let dictionary = {}
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
                console.log({"score": score, "evals": total_num_eval})
                num_eval = 0
                curr_score = 0
            }
            dictionary["score"]= curr_score;
            dictionary["num_eval"]=num_eval;
            value.push(dictionary);


        } catch(error) {
            // console.error("detection no existo" + " " + error)
        }

    }, 60)
    }
    return (
<>
    <div className={styles['home-container']}>
    <button 
            className={styles['explore-button']} 
            onClick={endConversation}
            style={{transform: "translateY(3rem)", marginLeft: "1rem"}}
        > 
            End Conversation
        </button>
        <h1 className="font-bold animated-text title"><strong>Fake:It</strong> ai chat</h1>

        <div className="appvide">
            <div id="number" className='ml-12 text-white'>mood score</div> 
        </div>

        <div className="media-container">
            <div className="video-container">
                <video 
                    crossOrigin="anonymous" 
                    ref={videoRef} 
                    autoPlay 
                    className="myVideo"
                ></video>
            </div>
            
            <div className="image-container">
                <img src="/rex.jpg" alt="A friendly robot" className="myImage"/>
            </div>
            
            {/* Added Text Area Container Here */}
        </div>
        <div className="subtitles">{chatResponse}</div> {/* And here */}



    </div>
</>    )
    }

export function getCurrentMood(){
   return document.getElementById("number").textContent
}

export function endConversation(){
    location.href = "/results"
    
}   