switch (localStorage.getItem("time")) {
    case undefined:
    localStorage.setItem("time", 0);
    var time = 0;
        
        break;
    case  null:
    localStorage.setItem("time", 0);
    var time = 0;
        break;
    default:
    var time = localStorage.getItem("time");
}
var running = 0;
var timerid = 0;
function startPause() {
    if (running == 0) {
        
        //시작버튼
        running = 1;
        increment();
    document.getElementById('stopTime').innerHTML="";
document.getElementById("exercisingimage").src='exercising.gif';
document.getElementById("start").innerHTML = "breath for a while";
        document.getElementById("startPause").style.backgroundColor = "#488aff";
        document.getElementById("startPause").style.borderColor = "#488aff";
    }
    else {
        //일시정시버튼
        running = 0;
        clearTimeout(timerid);
        var date = new Date();
        var nowDate = date.getDate();
        var nowMonth = date.getMonth() + 1;
        var hour = date.getHours();
        if(hour<10){
            hour = '0'+hour;
        }
        var min = date.getMinutes();
        if(min<10){
            min = '0'+min;
        } 
        var sec = date.getSeconds();
        if(sec<10){
            sec = '0'+sec;
        }
 document.getElementById('stopTime').innerHTML= nowMonth+"/"+nowDate+" "+
hour+":"+min+":"+sec;
document.getElementById("exercisingimage").src='nonexercising.gif';
 document.getElementById("start").innerHTML = "LET's get started!";
        document.getElementById("startPause").style.backgroundColor = "#488aff";
        document.getElementById("startPause").style.borderColor = "#488aff";
    }
}
//리셋
function reset() {
    running = 0;
    time = 0;
    clearTimeout(timerid);
    document.getElementById('stopTime').innerHTML="";
    document.getElementById("start").innerHTML = "START";
    document.getElementById("output").innerHTML = "<b>00:00:00</b>";
    document.getElementById("startPause").style.backgroundColor = "#488aff";
    document.getElementById("startPause").style.borderColor = "#488aff";
document.getElementById("exercisingimage").src='nonexercising.gif';
}
//타이머 시간측정 
function increment() {
    if (running == 1) {
        timerid = setTimeout(function () {
            time++;
            var hours = Math.floor(time / 3600 );
            var mins = Math.floor(time % 3600 / 60 );
            var secs = time % 3600 % 60;
            if (hours < 10) {
                hours = "0" + hours;
            }
            if (mins < 10) {
                mins = "0" + mins;
            }
            if (secs < 10) {
                secs = "0" + secs;
            }
            document.getElementById("output").innerHTML = "<b>"+hours + ":" + mins + ":" + secs+"</b>";
            increment();
            localStorage.setItem("time", time);
        }, 1000)
    }
}
