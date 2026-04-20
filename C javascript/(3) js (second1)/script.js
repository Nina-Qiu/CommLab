let container = document.querySelector(".boxContainer");

// define a function
function addParagraph(){
    // create an element in the Javascript world
    let paragraph = document.createElement('p');

    // manipulate / configure this element
    paragraph.innerText = "does this work?";

    // put the element onto the page
    document.body.append(paragraph)
}

function addBox(){
    let box = document.createElement("div");

    // box.style.width = "100px";
    // box.style.height = "100px";
    // box.style.backgroundColor = "black";

    box.className = "box";

    // select the container which the box should go into
    // let container = document.querySelector(".boxContainer");

    // append box to container
    container.append(box);
}

function moveContainer(){

    let randomNumber = (Math.random()*200)-100;
    console.log(randomNumber);

    container.style.left = randomNumber + "px";
}

// another way to remove: change the display function to none

