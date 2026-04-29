function getScrollPercentage() {
    console.log("window was scrolled");

    let scrolledAlready = window.scrollY
    let pageHeight = document.body.scrollHeight;
    let windowHeight = window.innerHeight;
    let possibleScrollSpace = pageHeight - windowHeight;
    let percentage = (scrolledAlready / possibleScrollSpace) * 100;

    return percentage;
}

function windowWasScrolled() {

    let percentage = getScrollPercentage();
    console.log("percentage", percentage);

    if (percentage > 0.3) {
        document.querySelector(".intro p:nth-child(1)").style.transform = "translate(-500px, -500px) rotate(-45deg)";
        document.querySelector(".cta").style.transform = "translateY(-100px)";
        document.querySelector(".cta").style.opacity = "0";
        document.querySelector(".arrow1").style.transform = "translateY(-100px)";
        document.querySelector(".arrow1").style.opacity = "0";
    } else {
        document.querySelector(".intro p:nth-child(1)").style.transform = "translate(0px, 0px) rotate(0deg)";
        document.querySelector(".cta").style.transform = "translateY(0px)";
        document.querySelector(".cta").style.opacity = "1";
        document.querySelector(".arrow1").style.transform = "translateY(0px)";
        document.querySelector(".arrow1").style.opacity = "1";
    }

    if (percentage > 0.32) {
        document.querySelector(".intro p:nth-child(2)").style.transform = "translate(-500px, -500px) rotate(-45deg)";
    } else {
        document.querySelector(".intro p:nth-child(2)").style.transform = "translate(0px, 0px) rotate(0deg)";
    }

    if (percentage > 0.34) {
        document.querySelector(".intro p:nth-child(3)").style.transform = "translate(-500px, -500px) rotate(-45deg)";
    } else {
        document.querySelector(".intro p:nth-child(3)").style.transform = "translate(0px, 0px) rotate(0deg)";
    }

    if (percentage > 0.36) {
        document.querySelector(".intro p:nth-child(4)").style.transform = "translate(-500px, -500px) rotate(-45deg)";
    } else {
        document.querySelector(".intro p:nth-child(4)").style.transform = "translate(0px, 0px) rotate(0deg)";
    }

    // this section happens from 0 - 20 percent
    if (percentage < 20) {
        let windowWidth = window.innerWidth;
        // let train_x_min = windowWidth - 10;
        let train_full_distance = windowWidth + 480;
        let train_x = train_full_distance * (percentage / 20);

        document.querySelector(".trainWrapper").style.transform = "translateX(" + -train_x + "px)"

        if (percentage < 7.5) {
            // let rebecca_x_min = windowWidth - 10;
            let rebecca_full_distance = windowWidth + 480;
            let rebecca_x = rebecca_full_distance * (percentage / 20);
            document.querySelector(".rebeccaWrapper").style.transform = "translateX(" + -rebecca_x + "px)"
        }

        if (percentage > 15) {
            document.querySelector(".flower1").style.transform = "translateX(500px)";
            document.querySelector(".flower2").style.transform = "translateX(-600px) rotate(45deg)";
            document.querySelector(".sun").style.transform = "translate(-300px, 300px)";
            document.querySelector(".house").style.transform = "translateX(600px)";
            document.querySelector(".paper").style.transform = "translateX(1000px)";
            document.querySelector(".billWrapper").style.transform = "translateX(600px)";
        } else {
            document.querySelector(".flower1").style.transform = "translateX(0px)";
            document.querySelector(".flower2").style.transform = "translateX(0px) rotate(30deg)";
            document.querySelector(".sun").style.transform = "translate(0px, 0px)";
            document.querySelector(".house").style.transform = "translateX(0px)";
            document.querySelector(".paper").style.transform = "translateX(0px)";
            document.querySelector(".billWrapper").style.transform = "translateX(0px)";
        }
    }

    if (percentage > 20){
            document.querySelector(".arrow").style.transform = "translateX(600px) rotate(75deg)";
            document.querySelector(".hierWrapper").style.transform = "translateX(850px)";
        } else {
            document.querySelector(".arrow").style.transform = "translateX(0px) rotate(75deg)";
            document.querySelector(".hierWrapper").style.transform = "translateX(0px)";
        }

    if (percentage > 33.9){
            document.querySelector(".billWrapper").style.transform = "translateX(-600px)";
            document.querySelector(".arrow").style.transform = "translateX(-600px) rotate(75deg)";
            document.querySelector(".hierWrapper").style.transform = "translateX(-850px)";
            document.querySelector(".rebeccaWrapper").style.transition = "transform .5s ease-in";
            document.querySelector(".rebeccaWrapper").style.transform = "translateX(-1000px)";
    }

    if (percentage > 37){
            document.querySelector(".people2").style.transform = "translateX(-400px)";
    } else {
            document.querySelector(".people2").style.transform = "translateX(0px)";
    }

    if(percentage > 39){
        document.querySelector(".gossip").style.transform = "translateX(-550px)";
    } else {
        document.querySelector(".gossip").style.transform = "translateX(0px)";
    }
}

window.addEventListener("scroll", windowWasScrolled);
