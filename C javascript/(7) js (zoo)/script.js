let monkeyEnclosure = document.querySelector("#monkeyEnclosure");

function newMonkey(){
    newAnimal("monkey", monkeyEnclosure);
}

function newGiraffe(){
    newAnimal("giraffe", giraffeEnclosure);
}

function newAnimal(name, enclosure){
    console.log("making new" + name); //check if a button/function works
    //make div
    let div = document.createElement("div");
    
    //make p tag
    let p = document.createElement("p");
    div.className = name;
    p.innerText = name;
    p.style.fontSize = Math.random() * 10 + 10 + "px";

    let randomY = Math.random() * 200 - 50;
    div.style.top = randomY + "px";

    let randomX = Math.random() * 200 - 50;
    div.style.left = randomX + "px";

    //attach p tag to div
    div.append(p);
    //attach div to monkey enclosure
    enclosure.append(div);
}