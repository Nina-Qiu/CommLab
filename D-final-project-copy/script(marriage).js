let introOut = 0.3;
let rebeccaOffTrain = 7.5;
let showScene1 = 15;
let showScene2 = 37;
let heirNote = 20;
let billLeaves = 31;
let peopleShowUp = 33;
let gossipStart = 35;
let wedGossip1 = 42;
let wedGossip2 = 47;
let cleanWed = 52;
let pickHouse = 55;
let theyPart = 61;
let doctorComes = 62;
let doctorLeaves = 66;


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

    document.querySelector(".rebeccaWrapper").style.transition = "none";

    if (percentage > introOut) {
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

    if (percentage > introOut+0.02*1) {
        document.querySelector(".intro p:nth-child(2)").style.transform = "translate(-500px, -500px) rotate(-45deg)";
    } else {
        document.querySelector(".intro p:nth-child(2)").style.transform = "translate(0px, 0px) rotate(0deg)";
    }

    if (percentage > introOut+0.02*2) {
        document.querySelector(".intro p:nth-child(3)").style.transform = "translate(-500px, -500px) rotate(-45deg)";
    } else {
        document.querySelector(".intro p:nth-child(3)").style.transform = "translate(0px, 0px) rotate(0deg)";
    }

    if (percentage > introOut+0.02*3) {
        document.querySelector(".intro p:nth-child(4)").style.transform = "translate(-500px, -500px) rotate(-45deg)";
    } else {
        document.querySelector(".intro p:nth-child(4)").style.transform = "translate(0px, 0px) rotate(0deg)";
    }

    // this section happens from 0 - 20 percent
        let windowWidth = window.innerWidth;
        // let train_x_min = windowWidth - 10;
        let train_full_distance = windowWidth + 480;
        let train_x = train_full_distance * (percentage / 20);

        document.querySelector(".trainWrapper").style.transform = "translateX(" + -train_x + "px)";
        

        if (percentage < rebeccaOffTrain) {
            // let rebecca_x_min = windowWidth - 10;
            let rebecca_full_distance = windowWidth + 480;
            let rebecca_x = rebecca_full_distance * (percentage / 20);
            document.querySelector(".rebeccaWrapper").style.transform = "translateX(" + -rebecca_x + "px)"
        }

        if (percentage > showScene1) {
            document.querySelector(".flower1").style.transform = "translateX(500px)";
            document.querySelector(".flower2").style.transform = "translateX(-600px)";
            showBill(40)
            showSun(-7, 0);
            showHouse(-10);
            showPaper(-10);
            


        } else {
            document.querySelector(".flower1").style.transform = "translateX(0px)";
            document.querySelector(".flower2").style.transform = "translateX(0px)";
            hideBill();
            hideSun();
            hideHouse();
            hidePaper();
            

        }

    if (percentage > heirNote){

            showArrow(42);
            showHier(47);
        
        } else {

            hideArrow();
            hideHier();
            
        }

    if (percentage > billLeaves){
            hideBill();
            hideArrow();
            hideHier();
            document.querySelector(".rebeccaWrapper").style.transition = "transform .5s ease-in";
            document.querySelector(".rebeccaWrapper").style.transform = "translateX(-1000px)";

    } else if (percentage > rebeccaOffTrain && percentage < billLeaves){
            document.querySelector(".rebeccaWrapper").style.transition = "transform .5s ease-in";
            document.querySelector(".rebeccaWrapper").style.transform = "translateX(-719px)";
    }

    if (percentage > peopleShowUp){
            showPeople(0);

    } else {
            hidePeople();
    }

    // if(percentage > gossipStart){

    //     showGossip1();
    //     showGossip2();
    //     showGossip3();

    // } else {

    //     hideGossip1();
    //     hideGossip2();
    //     hideGossip3();

    // }

    document.querySelector(".people2").addEventListener("click", showGossip);
    document.querySelector(".people2").addEventListener("click", showCTA);

    if (percentage > showScene2){

        hideHouse();
        hidePaper();
        hideSun();
        hidePeople();
        hideGossip();
    

        changeToBrown();

        document.querySelector(".rebeccaWrapper").style.transition = "transform .5s ease-in";
        document.querySelector(".rebeccaWrapper").style.transform = "translate(-850px, 46px)";
        document.querySelector(".rebeccaWrapper p").style.color = "white";

        showBill(43);
        showArch();

    } else if (percentage > billLeaves && percentage < showScene2){

        document.querySelector(".rebeccaWrapper p").style.color = "black";

        hideBill();
        changeToMilky();
        hideArch();
    }

    if (percentage > wedGossip1){

        showWeddingGossip1();

    } else {

        hideWeddingGossip1();

    }

    if (percentage > wedGossip2){

        hideWeddingGossip1();
        showWeddingGossip2();

    } else {

        hideWeddingGossip2();

    }

    if (percentage > cleanWed){

        hideWeddingGossip2();
        hideArch();

    } else if (percentage > wedGossip2 && percentage < cleanWed){

        showWeddingGossip2();
        showArch();
    }

    if (percentage > pickHouse){

        showHolidayHouse(-10);

    } else {

        hideHolidayHouse();

    }

    if (percentage > theyPart){

        hideHolidayHouse();
        showBill(40);
        document.querySelector(".rebeccaWrapper").style.transform = "translateX(-600px)";

    } else if (percentage > pickHouse && percentage < theyPart){

        showHolidayHouse();
        showBill(43);
        document.querySelector(".rebeccaWrapper").style.transform = "translate(-850px, 46px)";

    }


    if (percentage > doctorComes) {

        showDoctor(20);

    } else {

        hideDoctor();

    }

    document.querySelector(".doctorWrapper").addEventListener("click", showDoctorWords)
    document.querySelector(".doctorWrapper").addEventListener("click", doctorStopGlow)    
    document.querySelector(".doctorWrapper").addEventListener("click", showCTA)
    document.querySelector(".doctorWrapper").addEventListener("click", billGlows)
    
    document.querySelector(".billWrapper").addEventListener("click", showBillWords)
    document.querySelector(".billWrapper").addEventListener("click", billStopGlow)

    if (percentage > doctorLeaves){

        wordGoes();
        hideDoctor();

    }

    // // bills things
    // if(percentage > showScene2){ // 37
    //     showBill(43);
    // }else if(percentage > showScene1){ // 15
    //     showBill(40);
    // }else{
    //     hideBill();
    // }

}

window.addEventListener("scroll", windowWasScrolled);


function showHouse(xPerc){
    document.querySelector(".house").style.transform = "translateX(0%)";
    document.querySelector(".house").style.left = xPerc + "%";
}

function hideHouse(){
    document.querySelector(".house").style.transform = "translateX(-100%)"; //hide/push house in relation to its own size
    document.querySelector(".house").style.left = "0%"; // position house on the page
}


function showPaper(xPerc){
    document.querySelector(".paper").style.transform = "translateX(0%)";
    document.querySelector(".paper").style.left = xPerc + "%";
}

function hidePaper(){
    document.querySelector(".paper").style.transform = "translateX(-100%)";
    document.querySelector(".paper").style.left = "0%";
}


function showSun(xPerc, yPerc){
    document.querySelector(".sun").style.transform = "translate(0%, -43%)";
    document.querySelector(".sun").style.right = xPerc + "%";
    document.querySelector(".sun").style.top = yPerc + "%";
}

function hideSun(){
    document.querySelector(".sun").style.transform = "translate(100%, -43%)";
    document.querySelector(".sun").style.right = "0%";
    document.querySelector(".sun").style.top = "0%";
}


function showBill(xPerc){
    document.querySelector(".billWrapper").style.transform = "translateX(0%)";
    document.querySelector(".billWrapper").style.left = xPerc + "%";
}

function hideBill(){
    document.querySelector(".billWrapper").style.transform = "translateX(-100%)";
    document.querySelector(".billWrapper").style.left = "0%";
}


function showArrow(xPerc){
    document.querySelector(".arrow").style.transform = "translateX(0%)";
    document.querySelector(".arrow").style.left = xPerc + "%";
}

function hideArrow(){
    document.querySelector(".arrow").style.transform = "translateX(-100%)";
    document.querySelector(".arrow").style.left = "0%";
}


function showHier(xPerc){
    document.querySelector(".hierWrapper").style.transform = "translateX(0%)";
    document.querySelector(".hierWrapper").style.left = xPerc + "%";
}

function hideHier(){
    document.querySelector(".hierWrapper").style.transform = "translateX(-100%)";
    document.querySelector(".hierWrapper").style.left = "0%";
}


function showPeople(xPerc){
    document.querySelector(".people2").style.transform = "translateX(0%)";
    document.querySelector(".people2").style.right = xPerc + "%";
}

function hidePeople(){
    document.querySelector(".people2").style.transform = "translateX(100%)";
    document.querySelector(".people2").style.right = "0%";
}


function showGossip(){
    document.querySelector(".gossip1").style.transform = "translateY(-100%)";
    document.querySelector(".gossip1").style.opacity = "1";
    document.querySelector(".gossip2").style.transform = "translateY(-100%)";
    document.querySelector(".gossip2").style.opacity = "1";
    document.querySelector(".gossip3").style.transform = "translateY(-100%)";
    document.querySelector(".gossip3").style.opacity = "1";
}

function hideGossip(){
    document.querySelector(".gossip1").style.transform = "translateY(0%)";
    document.querySelector(".gossip1").style.opacity = "0";
    document.querySelector(".gossip2").style.transform = "translateY(0%)";
    document.querySelector(".gossip2").style.opacity = "0";
    document.querySelector(".gossip3").style.transform = "translateY(0%)";
    document.querySelector(".gossip3").style.opacity = "0";
}


// function showGossip2(){
//     document.querySelector(".gossip2").style.transform = "translateY(-100%)";
//     document.querySelector(".gossip2").style.opacity = "1";
// }

// function hideGossip2(){
//     document.querySelector(".gossip2").style.transform = "translateY(0%)";
//     document.querySelector(".gossip2").style.opacity = "0";
// }


// function showGossip3(){
//     document.querySelector(".gossip3").style.transform = "translateY(-100%)";
//     document.querySelector(".gossip3").style.opacity = "1";
// }

// function hideGossip3(){
//     document.querySelector(".gossip3").style.transform = "translateY(0%)";
//     document.querySelector(".gossip3").style.opacity = "0";
// }


function changeToBrown(){
    document.body.style.backgroundColor = "rgb(93, 64, 41)";
}

function changeToMilky(){
    document.body.style.backgroundColor = "rgb(253, 245, 212)";
}


function showArch(){
    document.querySelector(".arch").style.transform = "translateY(0%)";
    document.querySelector(".arch").style.top = "5%";
}

function hideArch(){
    document.querySelector(".arch").style.transform = "translateY(-100%)";
    document.querySelector(".arch").style.top = "0%";
}

function showWeddingGossip1(){
    document.querySelector(".weddingGossip1").style.transform = "translateY(-100%)";
    document.querySelector(".weddingGossip1").style.opacity = "1";
}

function hideWeddingGossip1(){
    document.querySelector(".weddingGossip1").style.transform = "translateY(0%)";
    document.querySelector(".weddingGossip1").style.opacity = "0";
}

function showWeddingGossip2(){
    document.querySelector(".weddingGossip2").style.transform = "translateY(-100%)";
    document.querySelector(".weddingGossip2").style.opacity = "1";
}

function hideWeddingGossip2(){
    document.querySelector(".weddingGossip2").style.transform = "translateY(0%)";
    document.querySelector(".weddingGossip2").style.opacity = "0";
}


function showHolidayHouse(xPerc){
    document.querySelector(".holidayHouse").style.transform = "translateX(0%)";
    document.querySelector(".holidayHouse").style.left = xPerc + "%";
}

function hideHolidayHouse(){
    document.querySelector(".holidayHouse").style.transform = "translateX(-100%)"; 
    document.querySelector(".holidayHouse").style.left = "0%"; 
}


function showCTA(){
    document.querySelector(".cta").style.transform = "translateY(0px)";
    document.querySelector(".cta").style.opacity = "1";
    document.querySelector(".arrow1").style.transform = "translateY(0px)";
    document.querySelector(".arrow1").style.opacity = "1";
}

function showDoctor(xPerc){
    document.querySelector(".doctorWrapper").style.transform = "translateX(0%)";
    document.querySelector(".doctorWrapper").style.left = xPerc + "%";
}

function hideDoctor(){
    document.querySelector(".doctorWrapper").style.transform = "translateX(-100%)";
    document.querySelector(".doctorWrapper").style.left = "0%";
}

function showDoctorWords(){
    document.querySelector(".doctorWords").style.transform = "translateY(-100%)";
    document.querySelector(".doctorWords").style.opacity = "1";
}

function doctorStopGlow(){
    document.querySelector(".doctorWrapper p").style.animation = "none";
    document.querySelector(".billWrapper").style.cursor = "pointer";
    document.querySelector(".billWrapper").style.zIndex = "3";
    
}

function billGlows(){
    document.querySelector(".billWrapper p").style.animation = "doctorPulse 2s ease-in-out infinite";
}

function showBillWords(){
    document.querySelector(".billWords").style.transform = "translateY(-100%)";
    document.querySelector(".billWords").style.opacity = "1";
}

function billStopGlow(){
    document.querySelector(".billWrapper p").style.animation = "none";
}

function wordGoes(){
    document.querySelector(".doctorWords").style.transform = "translateY(0%)";
    document.querySelector(".doctorWords").style.opacity = "0";
    document.querySelector(".billWords").style.transform = "translateY(0%)";
    document.querySelector(".billWords").style.opacity = "0";
}


