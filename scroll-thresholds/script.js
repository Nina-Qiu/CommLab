
function windowWasScrolled(){
    let percentage = getScrollPercentage();
    console.log("percentage", percentage);  

    //==33 doesn't work because it's not exact
    if (percentage > 33){
        console.log("paragraph is in view")
        document.querySelector(".one p").style.transform = "rotate(360deg)";
    }else{
        document.querySelector(".one p").style.transform = "rotate(0deg)";
    }

    if (percentage > 72){
        document.querySelector(".two p").style.transform = "scale(2)";
    }else{
        document.querySelector(".two p").style.transform = "scale(1)";
    }

    let windowWidth = window.innerWidth;
    let sabrina_x_max = windowWidth - 100;
    let sabrina_x = sabrina_x_max * (percentage/100)
    document.querySelector("#sabrina").style.transform = "translate(" + sabrina_x + "50px)"
}

window.addEventListener("scroll", windowWasScrolled);




function getScrollPercentage(){
    console.log("window was scrolled");

    //find out how far we actually scrolled
    //scrollY is a Javascript variable that tells us how far we have scrolled on the Y axis
    let scrolledAlready = window.scrollY

    //How tall is our page?
    let pageHeight = document.body.scrollHeight;

    //How tall is the window?
    let windowHeight = window.innerHeight;

    //How far can we still scroll?
    let possibleScrollSpace = pageHeight - windowHeight;

    let percentage = (scrolledAlready / possibleScrollSpace) * 100;
    //give you an number that you can use later in another function
    return percentage;
}

