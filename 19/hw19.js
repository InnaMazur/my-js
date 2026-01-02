window.onload = function(){

//1

let textStr = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque nemo veniam odit dolor impedit, ipsa vitae minima quasi doloribus repellendus cupiditate!";

let upperCase = textStr.match(/[A-Z]/g);
console.log(upperCase);

//2


let operation = "5 плюс 7 = 3";
let numbers = operation.match(/\d/g);
console.log(numbers);





//3

let wordsStr = textStr.match(/\b[a-zA-Z]{5}\b/g);
console.log(wordsStr);


    
}