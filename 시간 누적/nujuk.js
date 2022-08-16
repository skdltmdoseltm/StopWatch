let storageHour = localStorage.getItem("hour")
let storageMinutes = localStorage.getItem("minutes")
let storageSeconds = localStorage.getItem("seconds")

let hour = 0
let minutes = 0
let seconds = 0

const appendSeconds = document.getElementById("seconds");
const appendMinutes = document.getElementById("minutes");
const appendHour = document.getElementById("hour");
const buttonStart = document.getElementById("bt__START");
const buttonStop = document.getElementById("bt__STOP");
const buttonReset = document.getElementById("bt__reset");
let intervalId;
buttonStart.onclick = function(){
    
    switch (storageHour) {
        case null:
            localStorage.setItem("hour", 0)
            break;
        case undefined:
            localStorage.setItem("hour", 0)
            break;
        };
    switch (storageMinutes) {
            case null:
                localStorage.setItem("minutes", 0)
                break;
            case undefined:
                localStorage.setItem("minutes", 0)
                break;
        }
    switch (storageSeconds) {
        case null:
            localStorage.setItem("seconds", 0)
            break;
    
        case undefined:
            localStorage.setItem("seconds", 0)
            break;
    }
    clearInterval(intervalId)
    
    hour = localStorage.getItem("hour")
    minutes = localStorage.getItem("minutes")
    seconds = localStorage.getItem("seconds")
    
    appendHour.textContent = localStorage.getItem("hour")
    appendMinutes.textContent = localStorage.getItem("minutes")
    appendSeconds.textContent = localStorage.getItem("seconds")

  intervalId = setInterval(operateTimer, 1000)
}

buttonStop.onclick = function(){
    clearInterval(intervalId)
    localStorage.removeItem("seconds")
    localStorage.removeItem("minutes")
    localStorage.removeItem("hour")
    localStorage.setItem("seconds", seconds)
    localStorage.setItem("minutes", minutes)
    localStorage.setItem("hour", hour)
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