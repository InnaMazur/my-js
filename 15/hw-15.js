
window.onload = function() {

//1

let btnEl = document.querySelector('button');
let pElement = document.querySelector('p');

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
btnEl.addEventListener('click', function () {
  pElement.style.color = getRandomColor();

    });


    //2

    let sizeBtn = document.querySelector('.size');

    sizeBtn.ondblclick = function() {

        sizeBtn.style.width = '200px';
        sizeBtn.style.height = '200px';

    }


    //3


let btnClick = document.querySelector('.clickBtn');
let counterEl= document.querySelector('.counter');
let count = 0;

function incrementCounter() {
    count++;
    counterEl.innerText = count;


if (count >= 10) {
    btnClick.removeEventListener('click', incrementCounter);

}
}

btnClick.addEventListener('click', incrementCounter);



//4


// let divElements = document.querySelectorAll('div');
// divElements.forEach(function(item) {
// item.addEventListener('click', function() {
// item.remove();

// });

// });


// Закоментировала чтоб в 5-ом не мешало


//5

let container = document.querySelector('.blockContainer');
container.addEventListener('click', function(e) {
    if(e.target.classList.contains('ButtonFirst')){
        alert('First Button Clicked');
    }
    else if(e.target.classList.contains('ButtonSecond')){
        alert('Second Button Clicked');
    }
    else if(e.target.classList.contains('ButtonThird')){
        alert('Third Button Clicked');
    }
});



















}