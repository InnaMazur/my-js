
let firstValue = 2;
let secondValue = 2;
let result = firstValue + secondValue;
console.log(result);

let dataArr =['First', 'Second', 'Third'];
function innerFn(value) {
    return value + 33;
    
}
dataArr.forEach(item =>{
    let res = innerFn(item);
    console.log(res)
}
)


console.log(window);
console.log(document);
window.onload = function () {
    



// let idEl = document.getElementById('test');
// idEl.innerHTML = 'Hello JS';
// console.log(idEl);
// let classEl = document.getElementsByClassName('text-item');
// console.log(classEl);
// let tagEl = document.getElementsByTagName('p');
// console.log(tagEl);

let queryId = document.querySelector('#test');
console.log(queryId);

let link = document.querySelector('nav a');
console.log(link);

let linkEl = document.querySelectorAll('nav a');
console.log(linkEl);

let arrEl = Array.from(linkEl);
console.log(arrEl);

let[... pEl ]=  document.querySelectorAll('p');
console.log(pEl);
}
