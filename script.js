function sendSOS(){

alert("SOS Alert Sent to Emergency Contacts!");

}

function makeCall(){

window.location.href="tel:100";

}

function getLocation(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(showPosition);

}

else{

alert("Geolocation not supported");

}

}

function showPosition(position){

let lat = position.coords.latitude;
let lon = position.coords.longitude;

document.getElementById("location").innerHTML =
"Latitude: " + lat + "<br>Longitude: " + lon;

}

function startVoice(){

const recognition = new webkitSpeechRecognition();

recognition.onresult = function(event){

let command = event.results[0][0].transcript;

alert("You said: " + command);

if(command.includes("help")){
sendSOS();
}

};

recognition.start();

}