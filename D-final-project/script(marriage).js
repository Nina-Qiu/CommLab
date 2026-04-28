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




    // this section happens from 0 - 20 percent
    if (percentage < 20) {
        let windowWidth = window.innerWidth;
        // let train_x_min = windowWidth - 10;
        let train_full_distance = windowWidth + 480;
        let train_x = train_full_distance * (percentage / 20);

        document.querySelector(".trainWrapper").style.transform = "translate(" + -train_x + "px, 75px)"

        if (percentage < 7.5) {
            // let rebecca_x_min = windowWidth - 10;
            let rebecca_full_distance = windowWidth + 480;
            let rebecca_x = rebecca_full_distance * (percentage / 20);
            document.querySelector(".rebeccaWrapper").style.transform = "translate(" + -rebecca_x + "px, 75px)"
        }

        if (percentage > 15) {
            document.querySelector(".flower1").style.transform = "translateX(500px)";
            document.querySelector(".flower2").style.transform = "translateX(-600px) rotate(45deg)";
            document.querySelector(".sun").style.transform = "translate(-300px, 300px)";
            document.querySelector(".house").style.transform = "translateX(750px)";
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
            document.querySelector(".rebeccaWrapper").style.transition = "transform 1s ease-in";
            document.querySelector(".rebeccaWrapper").style.transform = "translateX(-50px)";
    }
}

window.addEventListener("scroll", windowWasScrolled);
