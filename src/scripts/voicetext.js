const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
var result = "";


recognition.interimResults = true;
recognition.continuous = true;


recognition.onresult = event => {
    result = event.results[0][0].transcript;
};

recognition.onspeechend = () =>{
    console.log("speech end.. " + result)
    //wait for AI to respond before allowing person to speak again
}

recognition.onend = () => {
    const bold = "font-weight: bold";
    const normal = "font-weight: normal"
    console.log("%c"+result+"%c", bold, normal)
    console.log("recognition ending")
};


export function startVoiceCollection(){
    console.log("recognition began")
    recognition.start()
}
export function endVoiceCollection(){
    recognition.stop()
}