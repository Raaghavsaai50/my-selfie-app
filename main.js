var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
        console.log(event);
        var Content = event.results[0][0].transcript;
        document.getElementById("textbox").innerHTML = Content;
        console.log(Content);
        if(Content=="take my selfie"){
            console.log("taking selfie");
            speak();
        }
       
}
function speak(){
    var synth=window.speechSynthesis;
    var speakdata="taking your selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}
var camera=document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
 
  function take_snapshot(){
      Webcam.snap(function(data_uri){
          document.getElementById("output").innerHTML="<img id='my_selfie' src="+data_uri+">";
      });
  }
  function save(){
      var link=document.getElementById("link");
      image=document.getElementById("my_selfie").src;
      link.href=image;
      link.click();
  }