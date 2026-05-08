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


let gossipWasClickedOnce = false; // false
let doctorWasClickedOnce = false; // false


function getScrollPercentage() {
    console.log("window was scrolled");

    let scrolledAlready = window.scrollY
    let pageHeight = document.body.scrollHeight;
    let windowHeight = window.innerHeight;
    let possibleScrollSpace = pageHeight - windowHeight;
    let percentage = (scrolledAlready / possibleScrollSpace) * 100;

    return percentage;
}


enterView({
    selector: '.introOut',
    enter: function (el) {

    },
    exit: function (el) {


    },
    progress: function (el, progress) {
        // el.style.opacity = progress;
        // console.log(progress)
        if (progress > 0) {
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

        if (progress > .25) {
            document.querySelector(".intro p:nth-child(2)").style.transform = "translate(-500px, -500px) rotate(-45deg)";
        } else {
            document.querySelector(".intro p:nth-child(2)").style.transform = "translate(0px, 0px) rotate(0deg)";
        }

        if (progress > .5) {
            document.querySelector(".intro p:nth-child(3)").style.transform = "translate(-500px, -500px) rotate(-45deg)";
        } else {
            document.querySelector(".intro p:nth-child(3)").style.transform = "translate(0px, 0px) rotate(0deg)";
        }

        if (progress > .75) {
            document.querySelector(".intro p:nth-child(4)").style.transform = "translate(-500px, -500px) rotate(-45deg)";
        } else {
            document.querySelector(".intro p:nth-child(4)").style.transform = "translate(0px, 0px) rotate(0deg)";
        }
    },
    offset: .1, // enter at middle of viewport
    // once: true, // trigger just once
});

enterView({
    selector: '.trainRide',
    enter: function (el) {
    },
    exit: function (el) {
    },
    progress: function (el, progress) {
        // el.style.opacity = progress;
        // console.log("train", progress)

        let windowWidth = window.innerWidth;
        let train_full_distance = windowWidth + 480;
        let train_x = train_full_distance * progress;

        document.querySelector(".trainWrapper").style.transform = "translateX(" + -train_x + "px)";


        let rebecca_full_distance = windowWidth + 480;
        let rebecca_x = rebecca_full_distance * progress;
        console.log("rebecca", 1 - rebecca_x / (windowWidth))
        if (1 - rebecca_x / (windowWidth) > .55) {
            // let rebecca_x_min = windowWidth - 10;


            document.querySelector(".rebeccaWrapper").style.transform = "translateX(" + -rebecca_x + "px)"


        }

    },
    // offset: .3, // enter at middle of viewport
    // once: true, // trigger just once
});

enterView({
    selector: '.scene1',
    enter: function (el) {
        document.querySelector(".flower1").style.transform = "translateX(500px)";
        document.querySelector(".flower2").style.transform = "translateX(-600px)";
        showBill(40);
        showSun(-7, 0);
        showHouse(-10);
        showPaper(-10);
    },
    exit: function (el) {
        document.querySelector(".flower1").style.transform = "translateX(0px)";
        document.querySelector(".flower2").style.transform = "translateX(0px)";
        hideBill();
        hideSun();
        hideHouse();
        hidePaper();
    },
    progress: function (el, progress) {
        if (progress > 0.4) {
            showArrow(42);
            showHier(47);

        } else {

            hideArrow();
            hideHier();
        }

    },
    // offset: .3, // enter at middle of viewport
    // once: true, // trigger just once
});


enterView({
    selector: '.scene1Out',
    enter: function (el) {
        console.log("scene 1 out!!")
        hideBill();
        hideArrow();
        hideHier();
        document.querySelector(".rebeccaWrapper").style.transition = "transform .5s ease-in";
        document.querySelector(".rebeccaWrapper").style.transform = "translateX(-1000px)";
        showPeople(0);

        if (gossipWasClickedOnce == false) {
            deactivateScroll()
        }




    },
    exit: function (el) {
        showBill(40);
        showArrow(42);
        showHier(47);
        document.querySelector(".rebeccaWrapper").style.transition = "transform .5s ease-in";
        document.querySelector(".rebeccaWrapper").style.transform = "translateX(-719px)";
        hidePeople();


    },
    progress: function (el, progress) {

    },

    offset: 1, // enter at middle of viewport
    // once: true, // trigger just once
});

document.querySelector(".people2").addEventListener("click", showGossip);
document.querySelector(".people2").addEventListener("click", showCTA);
document.querySelector(".people2").addEventListener("click", activateScroll);

enterView({
    selector: '.scene1CompOut',
    enter: function (el) {
        hideSun();
        hideHouse();
        hidePaper();
        hidePeople();
        hideGossip();
        hideArrow();
        hideCTA();

        // changhe backgoun
        changeToBrown();
        showArch();

        document.querySelector(".rebeccaWrapper").style.transition = "transform .5s ease-in";
        document.querySelector(".rebeccaWrapper").style.transform = "translate(" + (-(window.innerWidth / 2)) + "px, 46px)";
        document.querySelector(".rebeccaWrapper p").style.color = "white";


        showBill(43);

    },
    exit: function (el) {
        console.log("showhow")
        showSun(-7, 0);
        showHouse(-10);
        showPaper(-10);
        showPeople(0);
        showGossip();
        showArrow();
        showCTA();

        document.querySelector(".rebeccaWrapper").style.transition = "transform .5s ease-in";
        // document.querySelector(".rebeccaWrapper").style.transform = "translate(-850px, 46px)";
        document.querySelector(".rebeccaWrapper p").style.color = "white";


        changeToMilky();
        hideArch();
        hideBill();

    },
    progress: function (el, progress) {

    },

    // offset: .7, // enter at middle of viewport
    // once: true, // trigger just once
});

enterView({
    selector: '.invitationLeft1',
    enter: function (el) {
        console.log("helloooooo")
        showWeddingGossip1();
    },
    exit: function (el) {

        hideWeddingGossip1();
    },
    progress: function (el, progress) {

    },

    offset: .5, // enter at middle of viewport
    // once: true, // trigger just once
});

enterView({
    selector: '.flowersLeft2',
    enter: function (el) {
        console.log("helloooooo")
        hideWeddingGossip1();
        showWeddingGossip2();

    },
    exit: function (el) {
        showWeddingGossip1();
        hideWeddingGossip2();

    },
    progress: function (el, progress) {

    },

    offset: .5, // enter at middle of viewport
    // once: true, // trigger just once
});

enterView({
    selector: '.weddingFinished',
    enter: function (el) {
        hideWeddingGossip2();
        hideArch();
        showHolidayHouse(-10);

    },
    exit: function (el) {

        showArch();
        showWeddingGossip2();
        hideHolidayHouse()
    },
    progress: function (el, progress) {

    },

    offset: 1, // enter at middle of viewport
    // once: true, // trigger just once
});

enterView({
    selector: '.tag',
    enter: function (el) {
        hideHolidayHouse()

    },
    exit: function (el) {

        showHolidayHouse(-10);
    },
    progress: function (el, progress) {

    },

    offset: .7, // enter at middle of viewport
    // once: true, // trigger just once
});

enterView({
    selector: '.doctorComing',
    enter: function (el) {
        showDoctor(20);

        if(doctorWasClickedOnce == false){
 deactivateScroll();
        }
       

    },
    exit: function (el) {

        hideDoctor();
    },
    progress: function (el, progress) {

    },

    // offset: ., // enter at middle of viewport
    // once: true, // trigger just once
});

document.querySelector(".doctorWrapper").addEventListener("click", showDoctorWords)
document.querySelector(".doctorWrapper").addEventListener("click", doctorStopGlow)
document.querySelector(".doctorWrapper").addEventListener("click", showCTA)
document.querySelector(".doctorWrapper").addEventListener("click", billGlows)
document.querySelector(".doctorWrapper").addEventListener("click", function () {
    document.querySelector(".billWrapper").addEventListener("click", showBillWords)
    document.querySelector(".billWrapper").addEventListener("click", billStopGlow)
    document.querySelector(".billWrapper").addEventListener("click", activateScroll)

})

enterView({
    selector: '.partyStart',
    enter: function (el) {
        hideDoctor();
        wordGoes() 
        hideCTA()
        hideArrow();
        
      
   

    },
    exit: function (el) {
        
       showDoctor(20);
    },
    progress: function (el, progress) {

    },

    // offset: ., // enter at middle of viewport
    // once: true, // trigger just once
});


enterView({
    selector: '.champagne',
    enter: function (el) {
        console.log(":cling", el)

        el.querySelector("div:nth-child(1)").style.transform = "rotate(15deg)";
        el.querySelector("div:nth-child(2)").style.transform = "rotate(-15deg)";
        showPartyPeople1(0);
        showPartyPeople2(0);
      
    },
    exit: function (el) {

        el.querySelector("div:nth-child(1)").style.transform = "rotate(0deg)";
        el.querySelector("div:nth-child(2)").style.transform = "rotate(0deg)";

         hidePartyPeople1(0);
        hidePartyPeople2(0);
      
        
    },
    progress: function (el, progress) {

    },

    offset: .6, // enter at middle of viewport
    // once: true, // trigger just once
});


    document.querySelector(".partyPeople1").addEventListener("click", showPartyGossip);
    document.querySelector(".partyPeople1").addEventListener("click", people1StopPulse);
    document.querySelector(".partyPeople2").addEventListener("click", showPartyGossip2);
    document.querySelector(".partyPeople2").addEventListener("click", people2StopPulse);
    document.querySelector(".partyPeople2").addEventListener("click", showCTA);


enterView({
    selector: '.partyOver',
    enter: function (el) {
        hidePartyPeople1();
        hidePartyPeople2();
        changeToDarkBrown();
        
        
      
    },
    exit: function (el) {

        showPartyPeople1(0);
        showPartyPeople2(0);
        changeToBrown();
        
    },
    progress: function (el, progress) {

    },

    // offset: , // enter at middle of viewport
    // once: true, // trigger just once
});


enterView({
    selector: '.billDead',
    enter: function (el) {
        showTomb();

        
        
    },
    exit: function (el) {

        hideTomb();
        
    },
    progress: function (el, progress) {

    },

    // offset: , // enter at middle of viewport
    // once: true, // trigger just once
});

enterView({
    selector: '.deathGossipTrigger',
    enter: function (el) {
        showDeathGossip();
        hidePartyGossip();
        hidePartyGossip2();

        
        
    },
    exit: function (el) {

        hideDeathGossip();
        
    },
    progress: function (el, progress) {

    },

    // offset: , // enter at middle of viewport
    // once: true, // trigger just once
});







// function windowWasScrolled() {

//     let percentage = getScrollPercentage();
//     console.log("percentage", percentage);

//     document.querySelector(".rebeccaWrapper").style.transition = "none";

//     if (percentage > introOut) {
//         document.querySelector(".intro p:nth-child(1)").style.transform = "translate(-500px, -500px) rotate(-45deg)";
//         document.querySelector(".cta").style.transform = "translateY(-100px)";
//         document.querySelector(".cta").style.opacity = "0";
//         document.querySelector(".arrow1").style.transform = "translateY(-100px)";
//         document.querySelector(".arrow1").style.opacity = "0";
//     } else {
//         document.querySelector(".intro p:nth-child(1)").style.transform = "translate(0px, 0px) rotate(0deg)";
//         document.querySelector(".cta").style.transform = "translateY(0px)";
//         document.querySelector(".cta").style.opacity = "1";
//         document.querySelector(".arrow1").style.transform = "translateY(0px)";
//         document.querySelector(".arrow1").style.opacity = "1";
//     }

//     if (percentage > introOut+0.02*1) {
//         document.querySelector(".intro p:nth-child(2)").style.transform = "translate(-500px, -500px) rotate(-45deg)";
//     } else {
//         document.querySelector(".intro p:nth-child(2)").style.transform = "translate(0px, 0px) rotate(0deg)";
//     }

//     if (percentage > introOut+0.02*2) {
//         document.querySelector(".intro p:nth-child(3)").style.transform = "translate(-500px, -500px) rotate(-45deg)";
//     } else {
//         document.querySelector(".intro p:nth-child(3)").style.transform = "translate(0px, 0px) rotate(0deg)";
//     }

//     if (percentage > introOut+0.02*3) {
//         document.querySelector(".intro p:nth-child(4)").style.transform = "translate(-500px, -500px) rotate(-45deg)";
//     } else {
//         document.querySelector(".intro p:nth-child(4)").style.transform = "translate(0px, 0px) rotate(0deg)";
//     }

//     // this section happens from 0 - 20 percent
//         let windowWidth = window.innerWidth;
//         // let train_x_min = windowWidth - 10;
//         let train_full_distance = windowWidth + 480;
//         let train_x = train_full_distance * (percentage / 20);

//         document.querySelector(".trainWrapper").style.transform = "translateX(" + -train_x + "px)";


//         if (percentage < rebeccaOffTrain) {
//             // let rebecca_x_min = windowWidth - 10;
//             let rebecca_full_distance = windowWidth + 480;
//             let rebecca_x = rebecca_full_distance * (percentage / 20);
//             document.querySelector(".rebeccaWrapper").style.transform = "translateX(" + -rebecca_x + "px)"
//         }

//         if (percentage > showScene1) {
//             document.querySelector(".flower1").style.transform = "translateX(500px)";
//             document.querySelector(".flower2").style.transform = "translateX(-600px)";
//             showBill(40)
//             showSun(-7, 0);
//             showHouse(-10);
//             showPaper(-10);



//         } else {
//             document.querySelector(".flower1").style.transform = "translateX(0px)";
//             document.querySelector(".flower2").style.transform = "translateX(0px)";
//             hideBill();
//             hideSun();
//             hideHouse();
//             hidePaper();


//         }

//     if (percentage > heirNote){

//             showArrow(42);
//             showHier(47);

//         } else {

//             hideArrow();
//             hideHier();

//         }

//     if (percentage > billLeaves){
//             hideBill();
//             hideArrow();
//             hideHier();
//             document.querySelector(".rebeccaWrapper").style.transition = "transform .5s ease-in";
//             document.querySelector(".rebeccaWrapper").style.transform = "translateX(-1000px)";

//     } else if (percentage > rebeccaOffTrain && percentage < billLeaves){
//             document.querySelector(".rebeccaWrapper").style.transition = "transform .5s ease-in";
//             document.querySelector(".rebeccaWrapper").style.transform = "translateX(-719px)";
//     }

//     if (percentage > peopleShowUp){
//             showPeople(0);

//     } else {
//             hidePeople();
//     }

//     document.querySelector(".people2").addEventListener("click", showGossip);
//     document.querySelector(".people2").addEventListener("click", showCTA);

//     if (percentage > showScene2){

//         hideHouse();
//         hidePaper();
//         hideSun();
//         hidePeople();
//         hideGossip();


//         changeToBrown();

//         document.querySelector(".rebeccaWrapper").style.transition = "transform .5s ease-in";
//         document.querySelector(".rebeccaWrapper").style.transform = "translate(-850px, 46px)";
//         document.querySelector(".rebeccaWrapper p").style.color = "white";

//         showBill(43);
//         showArch();

//     } else if (percentage > billLeaves && percentage < showScene2){

//         document.querySelector(".rebeccaWrapper p").style.color = "black";

//         hideBill();
//         changeToMilky();
//         hideArch();
//     }

//     if (percentage > wedGossip1){

//         showWeddingGossip1();

//     } else {

//         hideWeddingGossip1();

//     }

//     if (percentage > wedGossip2){

//         hideWeddingGossip1();
//         showWeddingGossip2();

//     } else {

//         hideWeddingGossip2();

//     }

//     if (percentage > cleanWed){

//         hideWeddingGossip2();
//         hideArch();

//     } else if (percentage > wedGossip2 && percentage < cleanWed){

//         showWeddingGossip2();
//         showArch();
//     }

//     if (percentage > pickHouse){

//         showHolidayHouse(-10);

//     } else {

//         hideHolidayHouse();

//     }

//     if (percentage > theyPart){

//         hideHolidayHouse();
//         showBill(40);
//         document.querySelector(".rebeccaWrapper").style.transform = "translateX(-600px)";

//     } else if (percentage > pickHouse && percentage < theyPart){

//         showHolidayHouse();
//         showBill(43);
//         document.querySelector(".rebeccaWrapper").style.transform = "translate(-850px, 46px)";

//     }


//     if (percentage > doctorComes) {

//         showDoctor(20);

//     } else {

//         hideDoctor();

//     }





//     if (percentage > doctorLeaves){

//         wordGoes();
//         hideDoctor();

//     }

//     if (percentage > 68){
//         partySetup();
//         showPartyPeople1(0);
//         showPartyPeople2(0);
//     } else if (percentage > doctorLeaves && percentage < 68){
//         showBill(43);
//         document.querySelector(".rebeccaWrapper").style.transform = "translate(-850px, 46px)";
//         hidePartyPeople1();
//         hidePartyPeople2();
//     }

//     if (percentage > 72.3){
//         document.querySelector(".champ1 img").style.transform = "rotate(15deg)";
//         document.querySelector(".champ2 img").style.transform = "rotate(-15deg)";
//     } else {
//         document.querySelector(".champ1 img").style.transform = "rotate(0deg)";
//         document.querySelector(".champ2 img").style.transform = "rotate(0deg)";
//     }

//     if (percentage > 73.8){
//         document.querySelector(".champ3 img").style.transform = "rotate(15deg)";
//         document.querySelector(".champ4 img").style.transform = "rotate(-15deg)";
//     } else {
//         document.querySelector(".champ3 img").style.transform = "rotate(0deg)";
//         document.querySelector(".champ4 img").style.transform = "rotate(0deg)";
//     }

//     if (percentage > 75.4){
//         document.querySelector(".champ5 img").style.transform = "rotate(15deg)";
//         document.querySelector(".champ6 img").style.transform = "rotate(-15deg)";
//     } else {
//         document.querySelector(".champ5 img").style.transform = "rotate(0deg)";
//         document.querySelector(".champ6 img").style.transform = "rotate(0deg)";
//     }

//     document.querySelector(".partyPeople1").addEventListener("click", showPartyGossip);
//     document.querySelector(".partyPeople1").addEventListener("click", people1StopPulse);
//     document.querySelector(".partyPeople2").addEventListener("click", showPartyGossip2);
//     document.querySelector(".partyPeople2").addEventListener("click", people2StopPulse);
//     document.querySelector(".partyPeople2").addEventListener("click", showCTA);

//     if (percentage > 79){
//         hidePartyPeople1();
//         hidePartyPeople2();
//         hidePartyGossip();
//         hidePartyGossip2();

//     } else if (percentage > 78){
//         people1StopPulse();
//         people2StopPulse();
//         hideCTA();

//     } else if (percentage > 76){
//         document.querySelector(".partyPeople1 img").style.animation = "doctorPulse 2s ease-in-out infinite";
//         document.querySelector(".partyPeople1 img").style.cursor = "pointer";

//     } else {
//         people1StopPulse();
//         people2StopPulse();
//     }

//     if (percentage > 80){

//         showTomb();
//         changeToDarkBrown();

//     } else {

//         hideTomb();

//     }

//     if (percentage > 83){

//         showDeathGossip();

//     } else {

//         hideDeathGossip();

//     }

// }



// window.addEventListener("scroll", windowWasScrolled);












function showHouse(xPerc) {
    document.querySelector(".house").style.transform = "translateX(0%)";
    document.querySelector(".house").style.left = xPerc + "%";
}

function hideHouse() {
    document.querySelector(".house").style.transform = "translateX(-100%)"; //hide/push house in relation to its own size
    document.querySelector(".house").style.left = "0%"; // position house on the page
}


function showPaper(xPerc) {
    document.querySelector(".paper").style.transform = "translateX(0%)";
    document.querySelector(".paper").style.left = xPerc + "%";
}

function hidePaper() {
    document.querySelector(".paper").style.transform = "translateX(-100%)";
    document.querySelector(".paper").style.left = "0%";
}


function showSun(xPerc, yPerc) {
    document.querySelector(".sun").style.transform = "translate(0%, -43%)";
    document.querySelector(".sun").style.right = xPerc + "%";
    document.querySelector(".sun").style.top = yPerc + "%";
}

function hideSun() {
    document.querySelector(".sun").style.transform = "translate(100%, -43%)";
    document.querySelector(".sun").style.right = "0%";
    document.querySelector(".sun").style.top = "0%";
}


function showBill(xPerc) {
    document.querySelector(".billWrapper").style.transform = "translateX(0%)";
    document.querySelector(".billWrapper").style.left = xPerc + "%";
}

function hideBill() {
    document.querySelector(".billWrapper").style.transform = "translateX(-100%)";
    document.querySelector(".billWrapper").style.left = "0%";
}


function showArrow(xPerc) {
    document.querySelector(".arrow").style.transform = "translateX(0%)";
    document.querySelector(".arrow").style.left = xPerc + "%";
}

function hideArrow() {
    document.querySelector(".arrow").style.transform = "translateX(-100%)";
    document.querySelector(".arrow").style.left = "0%";
}


function showHier(xPerc) {
    document.querySelector(".hierWrapper").style.transform = "translateX(0%)";
    document.querySelector(".hierWrapper").style.left = xPerc + "%";
}

function hideHier() {
    document.querySelector(".hierWrapper").style.transform = "translateX(-100%)";
    document.querySelector(".hierWrapper").style.left = "0%";
}


function showPeople(xPerc) {
    document.querySelector(".people2").style.transform = "translateX(0%)";
    document.querySelector(".people2").style.right = xPerc + "%";
}

function hidePeople() {
    document.querySelector(".people2").style.transform = "translateX(100%)";
    document.querySelector(".people2").style.right = "0%";
}


function showGossip() {
    document.querySelector(".gossip1").style.transform = "translateY(-100%)";
    document.querySelector(".gossip1").style.opacity = "1";
    document.querySelector(".gossip2").style.transform = "translateY(-100%)";
    document.querySelector(".gossip2").style.opacity = "1";
    document.querySelector(".gossip3").style.transform = "translateY(-100%)";
    document.querySelector(".gossip3").style.opacity = "1";
    gossipWasClickedOnce = true;
}

function hideGossip() {
    document.querySelector(".gossip1").style.transform = "translateY(0%)";
    document.querySelector(".gossip1").style.opacity = "0";
    document.querySelector(".gossip2").style.transform = "translateY(0%)";
    document.querySelector(".gossip2").style.opacity = "0";
    document.querySelector(".gossip3").style.transform = "translateY(0%)";
    document.querySelector(".gossip3").style.opacity = "0";
}

function changeToBrown() {
    document.body.style.backgroundColor = "rgb(93, 64, 41)";
}

function changeToMilky() {
    document.body.style.backgroundColor = "rgb(253, 245, 212)";
}


function showArch() {
    document.querySelector(".arch").style.transform = "translateY(0%)";
    document.querySelector(".arch").style.top = "5%";
}

function hideArch() {
    document.querySelector(".arch").style.transform = "translateY(-100%)";
    document.querySelector(".arch").style.top = "0%";
}

function showWeddingGossip1() {
    document.querySelector(".weddingGossip1").style.transform = "translateY(-100%)";
    document.querySelector(".weddingGossip1").style.opacity = "1";
}

function hideWeddingGossip1() {
    document.querySelector(".weddingGossip1").style.transform = "translateY(0%)";
    document.querySelector(".weddingGossip1").style.opacity = "0";
}

function showWeddingGossip2() {
    document.querySelector(".weddingGossip2").style.transform = "translateY(-100%)";
    document.querySelector(".weddingGossip2").style.opacity = "1";
}

function hideWeddingGossip2() {
    document.querySelector(".weddingGossip2").style.transform = "translateY(0%)";
    document.querySelector(".weddingGossip2").style.opacity = "0";
}


function showHolidayHouse(xPerc) {
    document.querySelector(".holidayHouse").style.transform = "translateX(0%)";
    document.querySelector(".holidayHouse").style.left = xPerc + "%";
}

function hideHolidayHouse() {
    document.querySelector(".holidayHouse").style.transform = "translateX(-100%)";
    document.querySelector(".holidayHouse").style.left = "0%";
}


function showCTA() {
    document.querySelector(".cta").style.transform = "translateY(0px)";
    document.querySelector(".cta").style.opacity = "1";
    document.querySelector(".arrow1").style.transform = "translateY(0px)";
    document.querySelector(".arrow1").style.opacity = "1";
}

function hideCTA() {
    document.querySelector(".cta").style.transform = "translateY(-20px)";
    document.querySelector(".cta").style.opacity = "0";
    document.querySelector(".arrow1").style.transform = "translateY(-20px)";
    document.querySelector(".arrow1").style.opacity = "0";
}

function showDoctor(xPerc) {
    document.querySelector(".doctorWrapper").style.transform = "translateX(0%)";
    document.querySelector(".doctorWrapper").style.left = xPerc + "%";
}

function hideDoctor() {
    document.querySelector(".doctorWrapper").style.transform = "translateX(-100%)";
    document.querySelector(".doctorWrapper").style.left = "0%";
}

function showDoctorWords() {
    document.querySelector(".doctorWords").style.transform = "translateY(-100%)";
    document.querySelector(".doctorWords").style.opacity = "1";
}

function doctorStopGlow() {
    document.querySelector(".doctorWrapper p").style.animation = "none";
    document.querySelector(".billWrapper").style.cursor = "pointer";
    document.querySelector(".billWrapper").style.zIndex = "3";

}

function billGlows() {
    document.querySelector(".billWrapper p").style.animation = "doctorPulse 2s ease-in-out infinite";
}

function showBillWords() {
    document.querySelector(".billWords").style.transform = "translateY(-100%)";
    document.querySelector(".billWords").style.opacity = "1";
}

function billStopGlow() {
    document.querySelector(".billWrapper p").style.animation = "none";
}

function wordGoes() {
    document.querySelector(".doctorWords").style.transform = "translateY(0%)";
    document.querySelector(".doctorWords").style.opacity = "0";
    document.querySelector(".billWords").style.transform = "translateY(0%)";
    document.querySelector(".billWords").style.opacity = "0";
}

function partySetup() {

    document.querySelector(".billWrapper").style.transform = "translate(-50px, 50px)";
    document.querySelector(".rebeccaWrapper").style.transform = "translate(-700px, 95px)";

}

function showPartyPeople1(xPerc) {
    document.querySelector(".partyPeople1").style.transform = "translateX(0%)";
    document.querySelector(".partyPeople1").style.left = xPerc + "%";
}

function hidePartyPeople1() {
    document.querySelector(".partyPeople1").style.transform = "translateX(-100%)";
    document.querySelector(".partyPeople1").style.left = "0%";
}

function showPartyPeople2(xPerc) {
    document.querySelector(".partyPeople2").style.transform = "translateX(0%)";
    document.querySelector(".partyPeople2").style.right = xPerc + "%";
}

function hidePartyPeople2() {
    document.querySelector(".partyPeople2").style.transform = "translateX(100%)";
    document.querySelector(".partyPeople2").style.right = "0%";
}

function showPartyGossip() {
    document.querySelector(".partyGossip").style.transform = "translateY(-100%)";
    document.querySelector(".partyGossip").style.opacity = "1";
}

function hidePartyGossip() {
    document.querySelector(".partyGossip").style.transform = "translateY(0%)";
    document.querySelector(".partyGossip").style.opacity = "0";
}

function people1StopPulse() {
    document.querySelector(".partyPeople1 img").style.animation = "none";
    document.querySelector(".partyPeople2 img").style.animation = "doctorPulse 2s ease-in-out infinite";
}

function showPartyGossip2() {
    document.querySelector(".partyGossip2").style.transform = "translateY(-100%)";
    document.querySelector(".partyGossip2").style.opacity = "1";
}

function hidePartyGossip2() {
    document.querySelector(".partyGossip2").style.transform = "translateY(0%)";
    document.querySelector(".partyGossip2").style.opacity = "0";
}

function people2StopPulse() {
    document.querySelector(".partyPeople2 img").style.animation = "none";
}

function changeToDarkBrown() {
    document.body.style.backgroundColor = "rgb(45, 31, 20)";
}

function showTomb() {
    document.querySelector(".tomb").style.opacity = "1";
}

function hideTomb() {
    document.querySelector(".tomb").style.opacity = "0";
}

function showDeathGossip() {
    document.querySelector(".deathGossip").style.transform = "translateY(-100%)";
    document.querySelector(".deathGossip").style.opacity = "1";
}

function hideDeathGossip() {
    document.querySelector(".deathGossip").style.transform = "translateY(0%)";
    document.querySelector(".deathGossip").style.opacity = "0";
}

function activateScroll() {
    document.body.style.overflow = "scroll";
}

function deactivateScroll() {
    document.body.style.overflow = "hidden";
}