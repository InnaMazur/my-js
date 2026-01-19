
let nowDate = new Date();
console.log(nowDate);

let firstMonth = new Date(2000,0);
console.log(firstMonth);
console.log(nowDate.getDate());
console.log(nowDate.getDay());
console.log(nowDate.getFullYear());
console.log(nowDate.getMonth());
console.log(nowDate.getHours());
console.log(nowDate.getMinutes());
console.log(nowDate.toJSON());
console.log(nowDate.toUTCString());
console.log(nowDate.toDateString());


let pow = Math.pow(8,2);
console.log(pow);
console.log(Math.sqrt(pow));


console.log(Math.max(0,200,100.45));
console.log(Math.min(-1, -30, 20));

console.log(Math.floor(3.1));
console.log(Math.ceil(3.1));
console.log(Math.round(3.1));
console.log(Math.random());
console.log(Math.floor(Math.random()*10));



let strValue = 'String';
console.log(strValue.length);

let replaceStr = strValue.replace('S','R');
console.log(replaceStr);
console.log(strValue.slice(1,3));

let names = 'Nick,Mom,Bob';
let nameArr = names.split(',');
console.log(nameArr);

let userNameValue = '    UserName';
console.log(userNameValue);
console.log(userNameValue.trim());


let testValue = 'java';
let upperText = testValue.toUpperCase();
console.log(upperText);
console.log(upperText.toLowerCase());
