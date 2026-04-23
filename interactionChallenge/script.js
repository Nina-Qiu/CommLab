// old code:
function spanHovered(eventInfo){
    console.log("hello");

    eventInfo.target.style.color = "red";
    let randomX = Math.random()*200-100; // -100 to 100
    let randomY = Math.random()*200-100; // -100 to 100
    eventInfo.target.style.transform = "translate(" + randomX + "px, " + randomY + "px)";
}

function addMover(element){
    element.addEventListener("mouseover", spanHovered);
}





    let max_y1 = Math.random() * 600 - 300;

window.addEventListener("scroll", function(){
    let percentage = getScrollPercentage();

    // select the first letter
    let firstSpan = document.querySelector("span:nth-child(1)");
    // move it using the "top" attribute 
    let spanY1 = max_y1 * percentage;
    firstSpan.style.top = spanY1 + "px";
    // firstSpan.style.transform = "translate(1px," + spanY + "px)";
    // move it to a point that involves the percentage variable
    document.querySelector("span:nth-child(2)").style.top = (percentage*-100)+"px";
    document.querySelector("span:nth-child(3)").style.top = (percentage*200)+"px";
    document.querySelector("span:nth-child(4)").style.top = (percentage*-100)+"px";
    document.querySelector("span:nth-child(5)").style.top = (percentage*150)+"px";
    document.querySelector("span:nth-child(6)").style.top = (percentage*-250)+"px";
    document.querySelector("span:nth-child(7)").style.top = (percentage*250)+"px";
    document.querySelector("span:nth-child(8)").style.top = (percentage*-400)+"px";
    document.querySelector("span:nth-child(9)").style.top = (percentage*-320)+"px";
    document.querySelector("span:nth-child(10)").style.top = (percentage*200)+"px";
    document.querySelector("span:nth-child(11)").style.top = (percentage*350)+"px";
    document.querySelector("span:nth-child(12)").style.top = (percentage*-200)+"px";
})


function getScrollPercentage() {
    // how many pixels have we scrolled yet?
    let scrolledAlready = window.scrollY;

    // how high is our page?
    let pageHeight = document.body.scrollHeight;

    // how high is the window?
    let windowHeight = window.innerHeight;

    // how far can we scroll?
    let possibleScrollSpace = pageHeight - windowHeight;

    // console.log(scrolledAlready, possibleScrollSpace);
    let percentage = (scrolledAlready / possibleScrollSpace);
    return percentage;
}

function spinElm(element){
    element.style.transform = "rotate(360deg)";
}

function spinAllLetters(){
    let allSpans = document.querySelectorAll("span");
    allSpans.forEach(spinElm);
}

document.querySelector("button").addEventListener("click", spinAllLetters);
