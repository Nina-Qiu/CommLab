//browser never auto plays sound, it only does so when interactions are made
let playBtn =  document.querySelector("#playButton");
let pauseBtn =  document.querySelector("#pauseButton");
let catSound = document.querySelector("#catSound")

let soundSpeed = 1;

let fastBtn = document.querySelector("#fastButton")
let slowBtn = document.querySelector("#slowButton")
let speedBtn = document.querySelector("#speedButton")

let speedDisplay = document.querySelector("#speed")
// let catSound = 

// function playSound(){
//     console.log("play now");
//     catSound.play();
// }

// playBtn.addEventListener("click", playSound)


//same idea
playBtn.addEventListener("click", function playSound(){
    console.log("play now");
    catSound.loop = true;
    catSound.play();
})

function pauseSound(){
    console.log("pause now")
    catSound.pause();
}

pauseButton.addEventListener("click", pauseSound);


fastBtn.addEventListener("click", function(){
    //increase global variable soundSpeed
    soundSpeed = soundSpeed * 1.1;
    //display the current variable
    speedDisplay.innerText = soundSpeed;
    //apply the speed to the sound
    catSound.playbackRate = soundSpeed;
})



slowBtn.addEventListener("click", function(){
    soundSpeed = soundSpeed * 0.9;
    speedDisplay.innerText = soundSpeed;
})