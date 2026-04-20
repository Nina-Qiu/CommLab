let inside = document.querySelector(".sliderInside");
let outside = document.querySelector(".sliderOutside");
let text = document.querySelector(".text");
let container1 = document.querySelector(".functionsWrapper");
let btn1 = document.createElement("button");

function change(){
    outside.classList.toggle("changeColor");
    inside.classList.toggle("changePosition");
    document.body.classList.toggle("changeBackground");
    text.classList.toggle("changeText");

    btn1.innerText = "Functions";
    container1.append(btn1);
}

inside.onclick = change;

let container2 = document.querySelector(".snowWrapper");
let btn2 = document.createElement("button");
let container3 = document.querySelector(".windWrapper");
let btn3 = document.createElement("button");
let container4 = document.querySelector(".backWrapper");
let back = document.createElement("div");
back.innerHTML = "<a href='index.html'>Go Back</a>"
back.className = "back";

function appear(){
    btn2.innerText = "Snow";
    container2.append(btn2);

    btn3.innerText = "Wind";
    container3.append(btn3);

    container4.append(back);
}

btn1.onclick = appear;

function createSnowflakes(){
    let snowflake = document.createElement("div");
    snowflake.innerText = "❄️";
    snowflake.className = "snowflake";
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.fontSize = Math.random() * 50 + 20 + "px";
    document.body.append(snowflake);
}

btn2.onclick = createSnowflakes;

function wind(element){
    element.classList.add("wind");
}

function windAll(){
    let allSnowflakes = document.querySelectorAll(".snowflake");
    allSnowflakes.forEach(wind);
}

btn3.onclick = windAll;
