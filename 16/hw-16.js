window.onload = function() {
    
//1

let divContainer = document.querySelector('.info');


divContainer.addEventListener('mouseover', function() {

    this.style.backgroundColor = 'red';

});

divContainer.addEventListener('mouseout', function() {

    divContainer.style.backgroundColor = 'white';

});

//2

let positionEl = document.querySelector('.positionList');
let textBlock = document.querySelector('.textBlock');
textBlock.addEventListener('contextmenu', function(e) {
    e.preventDefault();

    positionEl.style.top = e.clientY + 'px';
    positionEl.style.left = e.clientX + 'px';
    positionEl.style.display = 'block';

});
document.addEventListener('click', function() {

    positionEl.style.display = 'none';
});

//3


let imgEl = document.querySelector('img');
imgEl.addEventListener('mousemove', function(e) {

    this.style.transform = 'scale(1.5)';
    this.style.transition = 'transform 0.5s ease';
    
});
imgEl.addEventListener('mouseout', function(e) {

this.style.transform = 'none';

});


//4

let gameArea = document.querySelector('.gameArea');
let gameSquareEl = document.querySelector('.gameSquare');

gameArea.appendChild(gameSquareEl);
let posX = 0;
let posY = 0;

document.addEventListener('keydown', function(e) {

switch(e.key) {
    case 'ArrowUp':
        posY = Math.max(0, posY - 10);
        break;
    case 'ArrowDown':
        posY = Math.min(gameArea.clientHeight - gameSquareEl.clientHeight, posY + 10);
        break;
    case 'ArrowLeft':
        posX = Math.max(0, posX - 10);
        break;
    case 'ArrowRight':
        posX = Math.min(gameArea.clientWidth - gameSquareEl.clientWidth, posX + 10);
        break;
}

gameSquareEl.style.top = posY + 'px';
gameSquareEl.style.left = posX + 'px';


});


//4.2



  


//5

let dragEl = document.querySelector('.drag');
let container = document.querySelector('.container');
let Dragging = false;
let squareSize = dragEl.offsetWidth;
container.appendChild(dragEl);

dragEl.addEventListener('mousedown', function(e) {

 Dragging = true;

});

document.addEventListener('mouseup', function(e) {
    Dragging = false;
});
document.addEventListener('mousemove', function(e) {

    if(!Dragging) return;
  
   
    let rect = container.getBoundingClientRect();

    let x = e.clientX - rect.left - squareSize / 2;
    let y = e.clientY - rect.top - squareSize / 2;

    x = Math.max(0, Math.min(x, container.clientWidth - squareSize));
    y = Math.max(0, Math.min(y, container.clientHeight - squareSize));

    dragEl.style.top = y + 'px'; 
    dragEl.style.left = x + 'px';



});
















}