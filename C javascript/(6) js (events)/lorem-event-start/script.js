let s = document.querySelector("span");
console.log(s);

s.addEventListener("mouseover", move);

function move(eventInfo){
    let btn = document.querySelector("button");

    eventInfo.target.style.color = "red";
    let randomX = Math.random() * 200 - 100; // -100 to 100
    let randomY = Math.random() * 200 - 100;
    eventInfo.target.style.transform = "translate(" + randomX + "px, " + randomY +"px)";

}

function addMoving(element){
    element.addEventListener("mouseover", move);
}

let allSpans = document.querySelectorAll("span");
allSpans.forEach(addMoving);