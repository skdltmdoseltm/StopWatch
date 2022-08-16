let hour = 0;
let minutes = 0;
let seconds = 0;
const appendSeconds = document.getElementById("seconds");
const appendMinutes = document.getElementById("minutes");
const appendHour = document.getElementById("hour");
const buttonStart = document.getElementById("bt__START");
const buttonStop = document.getElementById("bt__STOP");
const buttonReset = document.getElementById("bt__reset");
let intervalId;
buttonStart.onclick = function(){
    clearInterval(intervalId)
  intervalId = setInterval(operateTimer, 1000)
}

buttonStop.onclick = function(){
    clearInterval(intervalId)
}



buttonReset.onclick = function(){
    clearInterval(intervalId)
    seconds = 0; minutes = 0; hour = 0;
    appendSeconds.textContent = "00"
    appendMinutes.textContent = "00"
    appendHour.textContent ="00"
}
   

function operateTimer(){
    seconds++;
    appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds
    if(seconds > 59){
    minutes++;
    appendMinutes.textContent = minutes > 9 ? minutes : '0' + minutes
    seconds = 0
    appendSeconds.textContent = "00"
    }
    if(minutes > 59){
    hour++;
    appendHour.textContent = hour  > 9 ? hour : '0' + hour
    minutes = 0
    appendMinutes.textContent = "00"
    }
}