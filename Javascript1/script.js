// alert("what's going on?");

// let name1 = "Nina"; //Global variable, meaning it works throughout the whole code.
// let age = 20;

// alert("Hello " + name1 + " You are " + age + " this year, right?")

// name1 = "Kylie"

function greet(){
    alert("Hello!");
    console.log("The button was clicked.");
}

function greet2(){
    let language3 = "javascript"; //Local Vairable, meaning it only works within this function.
    console.log("speaking", language3);
    alert("this is tricky.")
    console.log("this function is finished.")
}

function greet3(theName){
    console.log("hello " + theName)
}

function changeHeadline(){
    document.querySelector("#programmingLanguage").innerText = "New Title!";
    console.log("function runs. changing headline")
}