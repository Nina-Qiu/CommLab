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
    if(percentage < 20){
        let windowWidth = window.innerWidth;
        // let train_x_min = windowWidth - 10;
        let train_full_distance = windowWidth + 318;
        let train_x = train_full_distance * (percentage/20);

        document.querySelector(".trainWrapper").style.transform = "translate(" + -train_x + "px, 75px)"

        if (percentage < 8) {
            // let rebecca_x_min = windowWidth - 10;
            let rebecca_full_distance = windowWidth + 318;
            let rebecca_x = rebecca_full_distance * (percentage/20);
            document.querySelector(".rebeccaWrapper").style.transform = "translate(" + -rebecca_x + "px, 75px)"
        }
    }

    

}


window.addEventListener("scroll", windowWasScrolled);
