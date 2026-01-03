window.onload = function(){

//1

function showMessageAfter (message,time){
    setTimeout(function(){
        console.log(message);
    },time);
}

showMessageAfter('Hellow, world!',3000);


//2

let btnEl = document.querySelector('button');
btnEl.addEventListener('click',function(){
    let counter = 0;
    let interval = setInterval(() => {
        console.log(++counter);
        if(counter>=10){
            clearInterval(interval);
            console.log('Stop timing')
        }
    },1000);

});


//3

let button = document.getElementById('colorBtn');

let colors = [
    "var(--color-1)",
    "var(--color-2)",
    "var(--color-3)",
    "var(--color-4)",
    "var(--color-5)",

]
button.addEventListener('click',function(){
    let randomIndex = Math.floor(Math.random()* colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
})


//4

let seconds = 0;
let intervalId = null;

const timeEl = document.querySelector(".time");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

function updateTime() {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  timeEl.textContent =
    String(mins).padStart(2, "0") + ":" +
    String(secs).padStart(2, "0");
}

startBtn.addEventListener("click", () => {
  if (intervalId !== null) return;

  intervalId = setInterval(() => {
    seconds++;
    updateTime();
  }, 1000);
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  seconds = 0;
  updateTime();
});


}