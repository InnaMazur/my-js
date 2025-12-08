//Push

 //1

 let todoList = [];
 todoList.push('Hello');
 todoList.push(1);
 todoList.push(2);
 console.log(todoList);

 //2

 let myNumber = [1,2,3,];
 function toList(arr, element) {
    arr.push(element);
    return arr;
    
 }
 console.log(toList(myNumber,4));


 //Pop
 //1

 let arrPop = [1,2,3,4,];
 arrPop.pop();
 arrPop.pop();
 console.log(arrPop);

//2

let numberPop = [1,2,3,4];
function ArrPop(arr,element) {
    arr.pop(element);
    return arr;  
}
console.log(ArrPop (numberPop));

//Unshift
//1

let unshiftArr =[3,4,5];
unshiftArr.unshift(1);
console.log(unshiftArr);

//2

let numberUnshift = [3,4,5];
function arrUnshift(arr,element) {
    arr.unshift(element);
    return arr;  
}
console.log(arrUnshift(numberUnshift,1));


//Shift
//1

let shiftArr = [1,2,3,4]
shiftArr.shift();
console.log(shiftArr);

//2
let numberShift = [1,2,3,4];
function arrShift(arr,element) {
    arr.shift(element);
    return arr;
}
console.log(arrShift(numberShift));


//Fill

//1

let FillArr = new Array(5);
FillArr.fill(2);
FillArr.fill('!',2);
console.log(FillArr);

//2

let fillArr = new Array (15);
function fillFn(fillArr) {
    fillArr.fill('!',2,4);
    fillArr.fill('*',5,9);
    return fillArr; 
}
console.log(fillFn(fillArr));



//Splice
//1

let spliceArr = [1,2,3,4,5,6,7];
let afterSplice = spliceArr.splice(2,4);
console.log(afterSplice);
console.log(spliceArr);

//2

let spliceArray = [1,2,3,4,5,6,7,8,9,10];
function spliceFn(spliceArray) {
    spliceArray.splice(3,6);
    return spliceArray; 
}
console.log(spliceFn(spliceArray));

//Reverse
//1

let ReverseArr = [1,2,3,4,5];
ReverseArr.reverse();
console.log(ReverseArr);


//2

let reverseArr = [1,2,3,4,5,6];
function reverseFn(reverseArr) {
    reverseArr.reverse();
    return reverseArr;
}
console.log(reverseFn(reverseArr));


//Concat
//1

let a = [1,2,3];
let b = [6,7,8];
a = a.concat(b);
console.log(a);

//2

let firstNumber = [1,2,3,4];
let secondNumber = [9,8,7];
function concatFn(firstNumber,secondNumber) {
    firstNumber= firstNumber.concat(secondNumber);
    return firstNumber;
}
console.log(concatFn(firstNumber,secondNumber));


//Includes
//1


let includesArr =[1,2,3,'Test',15,6,'*'];
console.log(includesArr.includes(10));
console.log(includesArr.includes(2));
console.log(includesArr.includes('*'));

//2
let includesArray =[1,2,3,'Test',15,6,'*'];
function includesFn(includesArray,element) {
    includesArray.includes(element);
     return  includesArray.includes(element);
}
console.log(includesFn(includesArray,3));
console.log(includesFn(includesArray,4));


//Filter
//1

let filterArr = [1,2,3,4,5,6,7,8,9];
let evenNumber = filterArr.filter((item)=>item%2==0? true:false);
console.log(evenNumber);

//2

function myFilter(arr,callback) {
    return arr.filter(callback);
}
let numbers = [1,2,3,4,5,6,7,8,9,10];
function  moreThanFive(item) {
    return item > 1;   
}
let Myresult = myFilter(numbers,moreThanFive);
console.log(Myresult);

//Map
//1

let number = [1,2,3,4,5];
let result = number.map(n=>n*n);
console.log(result);

//2

function myMap(arr, callback) {
    return arr.map(callback);
    
}
function addString(value) {
    return String(value);
    
}
let Mynumbers = [1,2,3,4,5];
let ourresult = myMap(Mynumbers, addString);
console.log(ourresult);