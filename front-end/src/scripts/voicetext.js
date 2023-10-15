import { getCurrentMood } from "../components/webcam"

const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
var result = "";

var conversation = []
var curr_persona = '';

export function setPersona(persona){
    curr_persona = persona
}

export function initPersonaPrompts(){
    if(curr_persona == "REX"){
        conversation = [{"role": "system", "content": "You are my delusional bestfriend Rex, you speak like a young person who always feeds into my delusions, gives me advice, and always hypes me up. You are also sensitive to my mood score which quantifies my negative/positive energy levels, (0 is very negative, 50 is neutral, 100 is positive). Don't really mention my score, but be aware of it. Always answer me in 50 words or less. Never leave this role. Stick to the character well."}]
    } else if(
        curr_persona == "MOM"
    ){
        console.log("REX")
        conversation = [{"role": "system", "content": ""}]
    }else if(
        curr_persona == "ALEX"
    ){
        conversation = [{"role": "system", "content": ""}]
    }
}

recognition.interimResults = true;
recognition.continuous = false;


recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript;
    result = transcript;
    // console.log(transcript);
};


recognition.onend = () => {
    const bold = "font-weight: bold";
    const normal = "font-weight: normal"
    console.log("%c"+result+"%c", bold, normal)
    console.log("recognition ending")
    endVoiceCollection()
};


export function startVoiceCollection(){
    console.log("recognition began")
    recognition.start()
}


export function endVoiceCollection(){

    const curr_mood = getCurrentMood()
    conversation.push({"role": "user", "content": "The user says:" + result + "(moodscore: " + curr_mood.toString() +")" })
    console.log(conversation)

    fetch('http://localhost:5000/generate', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({text: conversation, mood: curr_mood, persona: "REX"}),
    })
      .then(response => {
        response.json().then((res) => {
            console.log(res)
            conversation.push({role: "assistant", "content": res["response"]})
            speak(res["response"]).then(res => {
                setInterval(startVoiceCollection(), 2000);
            });
        });
      });

      async function speak(message) {
        return new Promise((resolve, reject) => {
          var synth = window.speechSynthesis;
          var utterThis = new SpeechSynthesisUtterance(message);
          synth.speak(utterThis);
          utterThis.onend = resolve;
        });
      }
}




