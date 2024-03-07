let userseq = [];
let gameseq = [];
let start = false;
let btncolr = ["green", "red", "yellow", "purple"];

let h2 = document.querySelector("h2");

h2.addEventListener("click", () => {
  if (start == false) {
    start = true;
    levelUp();
  }
});

//LevelUp Function
let level = 0;
function levelUp() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randidx = Math.floor(Math.random() * 4);
  let rndColor = btncolr[randidx];

  //push Game seq
  gameseq.push(rndColor);

  let randbtn = document.querySelector(`.${rndColor}`);
  gameFlash(randbtn);
}

//button Flash.
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 500);
}

//User Flash
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 150);
}

//button Press
function btnPress() {
  let btn = this;
  let userColor = this.classList[1];

  //push userseq
  userseq.push(userColor);
  userFlash(btn);

  //sendign Current value
  checkAns(userseq.length - 1);
}

//Check Answer
function checkAns(idx) {
  console.log(idx);
  if (gameseq[idx] == userseq[idx]) {
    if (userseq.length == gameseq.length) {
      levelUp();
    }
  } else {
    h2.innerHTML = `Game Over! Your Score was <b> ${level} </b> Press any key to start.`;
    let blink=document.querySelector(".contian");
    blink.classList.add("blink");
    setTimeout(function() {
      console.log("removed");
      blink.classList.add("trans");
    },200);
    //reset game
    reset();
  }
}

//All button by user click.
let allbtns = document.querySelectorAll(".btn");

for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}


//reset Game
function reset(){
  start=false;
  userseq=[];
  gameseq=[];
  level = 0;
}
