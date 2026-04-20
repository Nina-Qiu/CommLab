let inputBox = document.querySelector("#inputBox"); // = select the input element
let output = document.querySelector("#output");// = select the output div
let myButton = document.querySelector("#myButton") // = select the button
let clickCounter = 0;


// challenge 1: 
// when the button is clicked
// change the styling of the output text
function buttonClicked(){
    console.log ("changed");
    output.style.color = "pink";
    output.style.backgroundColor = "lightyellow";

    clickCounter = clickCounter + 1;
    console.log("clickCounter", clickCounter);
    if(clickCounter >= 10){
        console.log("alarm!");
        supersize(myButton);
    }
}
myButton.addEventListener("click", buttonClicked);



// challenge 2: 
// as we type into the input box, 
// the text should appear inside the "ouput" p tag:

function inputChanged(eventInfo){
    //what is the text in the inputBox?
    console.log(eventInfo)
    //let text = eventInfo.target.value;
    let text = inputBox.value;

    //reflect the current text in the output
    output.innerText = text;

    //check if the value inside the input is "spin"
    // if (text.includes("spin")){
    //     console.log ("the value is spin! let's spin!")
    // }

    if (text == "spin"){
        console.log ("the value is spin! let's spin!")
        spin(inputBox);
    }

  
}
inputBox.addEventListener("input", inputChanged);







// function to spin an element 
let angle = 0;
function spin(element){
    angle = angle + 360;
    element.style.transition = "all 1s linear"
    element.style.transform = "rotate('+angle+'deg)"
}



// -------- PART 2








let messageBoard = document.querySelector("#messageBoard");




function appendCountdown(){
    let clicksLeft = 10 - clickCounter;
    addMessage("press the button " + clicksLeft + " times");
}

//appendCountdown()
setInterval(appendCountdown, 1000);




// function to add text to the div with id "messageboard"
function addMessage(messagetext){
    let p = document.createElement("p");
    p.innerText = messagetext;
    messageBoard.prepend(p);
}

// function to rapidly increase the size of an element
function supersize(element){
    element.style.transition = "all .5s linear"
    element.style.transform = "scale(100)"
}

