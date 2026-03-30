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

let container2 = document.querySelector(".flowerWrapper");
let btn2 = document.createElement("button");
let container3 = document.querySelector(".breezeWrapper");
let btn3 = document.createElement("button");
let container4 = document.querySelector(".backWrapper");
let back = document.createElement("div");
back.innerHTML = "<a href='index.html'>Go Back</a>"
back.className = "back";

function appear(){
    btn2.innerText = "Flower";
    container2.append(btn2);

    btn3.innerText = "Breeze";
    container3.append(btn3);

    container4.append(back);
}

btn1.onclick = appear;

function createFlower(){
    let flower = document.createElement("div");
    flower.innerText = "🌸 🌼";
    flower.style.fontSize = Math.random() * 50 + 20 + "px";
    flower.className = "flower";

    flower.style.position = "absolute";

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    flower.style.left = x + "px";
    flower.style.top = y + "px";

    document.body.append(flower);
}

btn2.onclick = createFlower;

function breeze(element){
    element.classList.toggle("breeze");
}

function breezeAll(){
    let allFlowers = document.querySelectorAll(".flower");
    allFlowers.forEach(breeze);
}

btn3.onclick = breezeAll;
