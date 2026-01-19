window.onload = function(){

let simpleStr =/hi/;
let simplePatern = /\d\d\d/g;

let regClass = new RegExp ('hi');
let regClassPatern = new RegExp("\d\d\d");

// search

let textPatern = "123Lorem ipsumdolorit amet consectetur 456adipisicing elit. 432 Odio, quidem?";

let firstSearchIndex = textPatern.search(simplePatern);
console.log(firstSearchIndex);

//replace

let newResult = textPatern.replace(simplePatern,'!!!');
let textBox = document.querySelector('p');
textBox.textContent = newResult;

//match

let matchResult = textPatern.match(simplePatern);
console.log(matchResult);

//split

let splitText = '806123-23-34';
let splitResult = splitText.split('-');
console.log(splitResult);

let textSplit = textPatern.split(simplePatern);
console.log(textSplit);

//test

let pincodePatern =/\d\d\d\d/;
console.log(pincodePatern.test('123'));
console.log(pincodePatern.test('1243'));
console.log(pincodePatern.test('12-3'));



//2

let styleText ='css';
console.log(/^s/.test(styleText));
console.log(/ss$/.test(styleText));

let timeString = '17:30';//   ^\d{1,2}:\d{1,2}$
console.log(/^\d{1,2}:\d{2}$/.test(timeString));

let jsString = 'Hello js djfkJScff J.S  JS-SBCJC';
let jsMatch = jsString.match(/\bjs\b/gi);
console.log(jsMatch)

let yearsInfo = 'One day in 21-12-1999 person start trip and finish in 10-10-1004';
let timeRegEx = /\d{1,2}-\d{1,2}-\d{4}/g;
let timeArr = yearsInfo.match(timeRegEx);
console.log(timeArr);


}