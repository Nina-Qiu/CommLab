let btn1 = document.querySelector("button");
let train = document.querySelector(".trainWrapper");
train.className = "train";

function trainComes(){
    train.classList = (".trainComes");
}

btn1.addEventListener("click", trainComes);