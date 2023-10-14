const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
var result = "";


recognition.interimResults = true;
recognition.continuous = true;


recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript;
    result = transcript;
    // console.log(transcript);
};


recognition.onspeechend = () =>{
    console.log("SPEECH END")
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

    // fetch('http://localhost:5000/generate', {
    //     method: "POST",
    //     mode: "cors",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({text: result}),
    // })
    //   .then(response => {
    //     response.json().then((res) => {
    //         console.log(res)
    //     });
    //   });

}



