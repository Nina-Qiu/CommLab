let secondContainer = document.querySelector("#second")
let prev_s;

function addSeconds(){
    let img1 = document.createElement("img")

    img1.src = "images/silver star.png"
    img1.className = "silverStar"

    img1.style.position = "absolute";
    img1.style.left = Math.random() * 75 + "vw";
    img1.style.top = Math.random() * 75 + "vh";
    img1.style.width = Math.random() * 20 + 20 + "px";

    secondContainer.append(img1);
}

function updateSeconds(){
    let now = new Date();
    let s = now.getSeconds();

    console.log(s);

    if (s != prev_s){
      console.log("second.changed")
    addSeconds();
    }else{
      console.log("still in the same second", s)
    }

    if(s == 0){
        secondContainer.innerHTML = "";
    }else {
            let currentStars = secondContainer.querySelectorAll(".silverStar").length;
            if (currentStars < s) {
                for(let i = 0; i < (s - currentStars); i++) {
                    addSeconds();
                }
            }
        }


    prev_s = s;
}

setInterval(updateSeconds, 300);



let minuteContainer = document.querySelector("#minute")
let prev_m;

function addMinutes(){
    let img2 = document.createElement("img")

    img2.src = "images/redstar2.png"
    img2.className = "redStar"

    img2.style.position = "absolute";
    img2.style.left = Math.random() * 75 + "vw";
    img2.style.top = Math.random() * 75 + "vh";
    img2.style.width = "75px";

    minuteContainer.append(img2);
}

function updateMinutes(){
    let now = new Date();
    let m = now.getMinutes();

    console.log(m);

    if (m != prev_m){
      console.log("minute.changed")
    addMinutes();
    }else{
      console.log("still in the same minute", m)
    }

    if(m == 0){
        minuteContainer.innerHTML = "";
    }else {
            let currentStars = minuteContainer.querySelectorAll(".redStar").length;
            if (currentStars < m) {
                for(let i = 0; i < (m - currentStars); i++) {
                    addMinutes();
                }
            }
        }


    prev_m = m;
}

setInterval(updateMinutes, 300);



let hourContainer = document.querySelector("#hour");
let prev_h;   

function addHours(h) {
    let img3 = document.createElement("img");
    img3.src = "images/moon.png";
    img3.className = "moonPic";

    let spacing = 8;
    let margin = 2;
    
    img3.style.position = "absolute";
    img3.style.marginTop = "0px";
    
    img3.style.left = (margin + (h - 1) * spacing) + "vw";
    img3.style.width = "100px";
    
    hourContainer.append(img3);
}

function updateHours(){
    let now = new Date();
    let h = now.getHours() % 12; 
    if (h == 0){
      h = 12;
    }

    console.log(h);

    if (h != prev_h) {
        console.log("hour.changed");
        hourContainer.innerHTML = "";

        for (let i = 1; i <= h; i++) {
            addHours(i);
        }

        prev_h = h;
    }
}

setInterval(updateHours, 1000);