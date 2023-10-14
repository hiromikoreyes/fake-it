import { useState, useRef, useEffect } from 'react'
import * as faceapi from 'face-api.js'
import { scoreEvaluation } from '../scripts/evaluate'
import Graph from './graph'

export default function Webcam(){
    const [scoreData, setScoreData] = useState([]);
    const [evalsData, setEvalsData] = useState([]);
    const [showGraph, setShowGraph] = useState(false);
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

        // DRAW YOU FACE IN WEBCAM
        // videoRef.current.innerHtml = faceapi.createCanvasFromMedia(videoRef.current)
        // faceapi.matchDimensions(canvasRef.current,{
        // width:940,
        // height:650
        // })

        // const resized = faceapi.resizeResults(detections,{
        //     width:940,
        //     height:650
        // })
        // Draws the lines cuh
        // faceapi.draw.drawDetections(canvasRef.current,resized)
        // faceapi.draw.drawFaceLandmarks(canvasRef.current,resized)
        // faceapi.draw.drawFaceExpressions(canvasRef.current,resized)
        

        try{
            curr_score = curr_score + scoreEvaluation(detections["0"]["expressions"].happy, detections["0"]["expressions"].surprised,detections["0"]["expressions"].neutral);
            num_eval += 1;

            if(num_eval % 30 == 0){
                const score = curr_score / num_eval;
                total_num_eval += num_eval
                scoreData.push(score);
                evalsData.push(total_num_eval);
                console.log({"score": score, "evals": total_num_eval})
                num_eval = 0
                curr_score = 0
            }

        } catch(error) {
            // console.error("detection no existo" + " " + error)
        }

    }, 60)
    }
    
    const transferDataToGraph = () => {
        // Assuming you have the arrays or can generate them
        const newScoreData = [scoreData];
        const newEvalsData = [evalsData];
    
        setScoreData(newScoreData);
        setEvalsData(newEvalsData);
        setShowGraph(true);
      };

    return(
        <>
            <h1>Face Detection</h1>
            <div className="appvide">
            
            <video crossOrigin="anonymous" ref={videoRef} autoPlay></video>
            <button onClick={transferDataToGraph}>Show Graph</button>
            </div>
            <canvas ref={canvasRef} width="940" height="650"
            className="appcanvas"/>
            {showGraph && <Graph scoreData={scoreData} evalsData={evalsData} />}

        </>
    )
}
