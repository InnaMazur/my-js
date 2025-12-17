

//  Header, section, div
window.onload = function () {

let header = document.getElementById('main-header');
console.log(header);

let divId = document.getElementById('div-1');
console.log(divId);

let sectionCl = document.getElementsByClassName('section-info');
console.log(sectionCl);

let divCl = document.getElementsByClassName('content-div');
console.log(divCl);

let divAll = document.getElementsByTagName('div');
console.log(divAll);

let sectionAll = document.getElementsByTagName('section');
console.log(sectionAll);


//Ul > li

let firstLi = document.querySelector('ul li');
console.log(firstLi);

let lastLi = document.querySelector('ul li:last-child');
console.log(lastLi);

let thirdLi = document.querySelector('ul li:nth-child(3');
console.log(thirdLi);


//QuerySelectorAll

let allLi = document.querySelectorAll('ul li');
console.log(allLi);

let[... liAll ]=  document.querySelectorAll('ul li');
console.log(liAll);

// 3

let listitems = document.querySelectorAll('ul.nav>li');
console.log(listitems);

let listitem = document.querySelectorAll('li:nth-child(2)');
console.log(listitem);

}