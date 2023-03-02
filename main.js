var SpeechRecognition = window.webkitSpeechRecognition;
var Recogniton = new SpeechRecognition();

function Start() {
   document.getElementById("textbox").innerHTML = "";
   Recogniton.start();
}

Recogniton.onresult = function (event){

    console.log(event);
    
var Content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML = Content;
}
