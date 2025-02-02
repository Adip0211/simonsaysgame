let gameSeq=[];
let userSeq=[];

let btns = ["red","yellow","blue","green"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if (started==false && level==0) {
        console.log("game is started");
        started= true;
    levelup();
    }
} )

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },200);
}

function levelup() {
userSeq = [];
    level++;
h2.innerText = `Level ${level}`;

let randIdx = Math.floor(Math.random() * 3);
let randColor = btns[randIdx];
let randBtn = document.querySelector(`.${randColor}`);
gameSeq.push(randColor);
setTimeout(function () {
    btnFlash(randBtn);
},300);
}

function checkAns(idx) {
if (userSeq[idx] === gameSeq[idx]) {
   if (userSeq.length == gameSeq.length){
    levelup();
   }
}  else {
    h2.innerHTML = `game over! Your score was <b>${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "#ff47f9";
    },250);
    reset();
 }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for ( let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level  = 0;

}