let box1 = document.querySelector("#box1")

function moveBox(){
    box1.classList.toggle("moveRight")
}


function anotherFunction(){
    console.log("button pressed")
}

function addButton(){
    let btn = document.createElement('button');
    btn.innerText = 'multiply';
    btn.onclick = addButton; //<-- there are no "()" here. see the slides to find out why!

    document.querySelector(".buttonContainer").append(btn);
}

function turnElementRed(element){
    element.style.backgroundColor = "red";
}

function turnOneButtonRed(){
    let btn = document.querySelector("button");
    turnElementRed(btn); // it just selects the first element that matches
    // btn.style.backgroundColor = "red"; does the exact same thing
}

function turnAllButtonsRed(){
    let btns = document.querySelectorAll("button");
    console.log(btns); // creates a Node list
    // turnElementRed(btns);
    btns.forEach(turnElementRed);
}