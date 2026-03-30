let container = document.querySelector(".buttonWrapper");
let container2 = document.querySelector(".subWrapper");
let btn1 = document.querySelector(".button1");
let winterWrapper = document.createElement("div");
winterWrapper.innerHTML = "<a href='k(winter).html'>Back to Winter</a>"
winterWrapper.className = "winterWrapper";
let springWrapper = document.createElement("div");
springWrapper.innerHTML = "<a href='j(spring).html'>Forward to Spring</a>"
springWrapper.className = "springWrapper";


function appear(){
    container2.append(winterWrapper);
    container2.append(springWrapper);
}

btn1.onclick = appear;