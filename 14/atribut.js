
window.onload = function () {
    let linkEl = document.querySelector('a');
    console.log(linkEl.getAttribute('target'));
    console.log(linkEl.getAttribute('href'));
    linkEl.removeAttribute('target');
    
let emptyEl = document.querySelector('.empty');
emptyEl.setAttribute('href','https://prog.kiev.ua');

emptyEl.innerHTML = 'Sale';
emptyEl.setAttribute('target', '_blank');


let buttonEl = document.querySelector('button');
console.log(buttonEl.hasAttribute('disabled'));
console.log(emptyEl.hasAttribute('target'));


let mainTitle = document.querySelector('h1');
mainTitle.setAttribute('style', 'background-color:yellow;');
// mainTitle.setAttribute('style','padding:30px');

mainTitle.style.cssText += ' padding:30px';
mainTitle.style.color ='white';
mainTitle.style.backgroundColor = 'black';
mainTitle.style.fontSize = '30px';

let allStyle = getComputedStyle(mainTitle);
console.log(allStyle);
console.log(allStyle.backgroundColor);
console.log(parseInt(allStyle.fontSize));
console.log(allStyle.marginTop);

let subTitleEl =document.querySelector('h3');
// subtitleEl.setAttribute('class','subTitle');
// subTitleEl.className += ' active';
// console.log(subTitleEl.classList);

subTitleEl.classList.add('subTitle','active','test-again');
// subTitleEl.classList.add('active');
subTitleEl.classList.remove('test','test-again');

// subTitleEl.classList.replace('subTitle', 'disabled');

console.log(subTitleEl.classList.contains('disabled'));

subTitleEl.onclick = function() {
    subTitleEl.classList.toggle('active');
    
}


}