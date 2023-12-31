import React from "react"
import './character.css'
import '../index.css'
import '../scripts/voicetext'
import { initPersonaPrompts, setPersona } from "../scripts/voicetext"


export default function Character(){

    function chooseCharacterRex(){
        location.href="/webcam/rex"
    }
    function chooseCharacterAlex(){
        location.href="/webcam/alex"
    }
    function chooseCharacterMom(){
        location.href="/webcam/mom"
    }

    
    return(
        <div className="character-card-container flex justify-center pt-36  ">
            <div onClick={chooseCharacterRex} className="w-80 character-card border-2 border-gray-700 hover:scale-110 transition-all cursor-pointer rounded-lg">
                <div className="cc-title">
                    REX
                </div>
                <div className="cc-img-container m24">
                    <img src="/rex.jpg"/>
                </div>
                <div className="cc-body text-center m-10">
                    Rex is your best friend who feeds into all your wacky and crazy delusions. 
                </div>
            </div>
            <div onClick={chooseCharacterMom} className="w-80 character-card border-2 border-gray-700 hover:scale-110 transition-all cursor-pointer rounded-lg">
                <div className="cc-title">
                    MOM
                </div>
                <div className="cc-img-container m24 text-center">
                    <img src="/mom.jpg"/>
                </div>
                <div className="cc-body m-10 text-center">
                    Your loving, caring, overendearing, warm, mother.
                </div>
            </div>
            <div onClick={chooseCharacterAlex} className="w-80 character-card cursor-pointer border-2 border-gray-700 hover:scale-110 cursor-pointer transition-all rounded-lg">
                <div className="cc-title text-center">
                    ALEX
                </div>
                <div className="cc-img-container m24">
                    <img src="/alex.jpg "/>
                </div>
                <div className="cc-body m-10">
                    Your biggest fan.
                </div>
            </div>

        </div>
    )

}