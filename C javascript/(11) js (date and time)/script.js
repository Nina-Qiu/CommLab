let prev_m ;

function getTheTime(){
    let now = new Date();

    let h = now.getHours();      // 0–23
    let m = now.getMinutes();    // 0–59
    let s = now.getSeconds();    // 0–59
    console.log( h, m, s );
    // addSecondsDiv();

    //repeat(s, addSecondsDiv);
    
    document.querySelector(".seconds").innerHTML = "";
    repeat(s, addSecondsDiv)
    // addSecondsDiv()

    if (m != prev_m){
      console.log("minute.changed")
    }else{
      console.log("still in the same minute", m)
    }


    prev_m = m;
}

setInterval(getTheTime, 300)

function addSecondsDiv(){
  let div = document.createElement("div");
  document.querySelector(".seconds").append(div)
}











// Leon's Helper function:
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}