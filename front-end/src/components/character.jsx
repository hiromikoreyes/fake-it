import React from "react"
import './character.css'
import '../index.css'
import '../scripts/voicetext'
import { initPersonaPrompts, setPersona } from "../scripts/voicetext"


export default function Character(){

    function chooseCharacterRex(){
        setPersona("REX")
        initPersonaPrompts()
        location.href="/webcam"
    }

    
    return(
        <div className="character-card-container flex justify-center">
            <div onClick={chooseCharacterRex} className="w-80 character-card border-2 border-gray-700 hover:scale-110 transition-all rounded-lg">
                <div className="cc-title">
                    REX
                </div>
                <div className="cc-img-container m24">
                    <img src="https://img.freepik.com/premium-vector/cartoon-t-rex-was-standing-with-two-legs_9633-4.jpg?w=996"/>
                </div>
                <div className="cc-body text-center m-10">
                    Rex is your best friend who feeds into all your wacky and crazy delusions. 
                </div>
            </div>
            <div className="w-80 character-card border-2 border-gray-700 hover:scale-110 transition-all rounded-lg">
                <div className="cc-title">
                    MOM
                </div>
                <div className="cc-img-container m24 text-center">
                    <img src="https://img.freepik.com/premium-vector/cartoon-t-rex-was-standing-with-two-legs_9633-4.jpg?w=996"/>
                </div>
                <div className="cc-body m-10 text-center">
                    Your loving, caring, overendearing, warm, mother.
                </div>
            </div>
            <div className="w-80 character-card border-2 border-gray-700 hover:scale-110 transition-all rounded-lg">
                <div className="cc-title text-center">
                    ALEX
                </div>
                <div className="cc-img-container m24">
                    <img src="https://img.freepik.com/premium-vector/cartoon-t-rex-was-standing-with-two-legs_9633-4.jpg?w=996"/>
                </div>
                <div className="cc-body m-10">
                    Your biggest fan.
                </div>
            </div>

        </div>
    )

}