
// function timer(){

//     console.log("go")

// }




// setInterval(timer,1000)



var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var waqt = document.getElementById("minutes")
var abayt = document.getElementById("seconds")
var yetoohooga = document.getElementById("milliseconds")
var geogeo;

function timer(){
    milliseconds++
    yetoohooga.innerHTML=milliseconds;
    if(milliseconds >= 100){
        seconds++
        abayt.innerHTML=seconds
        milliseconds = 0;
       
    } else if(seconds >= 60){
        minutes++
        waqt.innerHTML= minutes
        seconds = 0
    }
}

function chalbhai(){
    geogeo = setInterval(timer,10) 
}


function rukjabe(){
    clearInterval(geogeo)
}

function kahanikhatam(){
    
    var minutes = 0;
    var seconds = 0;
    var milliseconds = 0;

    waqt.innerHTML = minutes
    abayt.innerHTML = seconds
    yetoohooga.innerHTML = milliseconds
    rukjabe()
}