window.onload = function() {

// let blockEl = document.querySelector('.block');
// let width = blockEl.offsetWidth;
// let height = blockEl.offsetHeight;
// console.log(width, height);

// let widthClient = blockEl.clientWidth;
// let heightClient = blockEl.clientHeight;
// console.log(widthClient, heightClient);

// let windowWidth = window.innerWidth;
// let windowHeight = window.innerHeight;
// console.log(windowWidth, windowHeight);

// let bodyEl = document.querySelector('body');
// console.log(bodyEl.clientWidth, bodyEl.clientHeight);


//2nd part
// let btnEl = document.querySelector('.btn');
// let addEl = document.querySelector('.addEvent');
// let removeEl = document.querySelector('.remove');

// btnEl.onclick = function() {
//     alert('Hello');
// }

// function showAlert (){
//     alert('Event added');
// }
// addEl.addEventListener('click', showAlert);


// removeEl.addEventListener('click', function() {
//     addEl.removeEventListener('click', showAlert);

// });

// let[...pElements] = document.querySelectorAll('p');
// pElements.forEach(item=>{
//     item.onclick = function() {
//         console.log(this);
//         this.innerText = 'Changed';
// }
//     });

//     let linkEl = document.querySelector('a');
//     linkEl.onclick = function(event) {
//         console.log(event);
// console.log(event.target);
//         event.preventDefault();

//     }

//     let ulList = document.querySelector('ul');
//     ulList.onclick = function(e) {
//         console.log(e.target);
//         if(e.target.classList.contains('active')) {
//             e.target.innerText = 'Active';

// }
// }


let menuBtn = document.querySelector('.menu-btn');
let menuList = document.querySelector('.menu-list');

menuBtn.onclick = function() {

// this.classList.toggle('active');
menuList.classList.toggle('active');

// or

// menuBtn.Btn.addEventListener('click', function() {
//     menuList.classList.toggle('active');

// });






}

document.addEventListener('Load', function() {
});
document.addEventListener('DOMContentLoaded', ()=> {
});



}