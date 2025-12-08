let todoList = ['Dog'];
// todoList[0]= 'Buy milk';
todoList.push('Buy milk');// add
todoList.push('Buy cat');

todoList.pop(); // delite 

todoList.unshift(1); //add at the beginning
todoList.unshift(true);
todoList.shift(); //delite at the beginning
console.log(todoList);

// isArray

console.log(Array.isArray('String'));
console.log(Array.isArray(123));
console.log(Array.isArray([123]));

// fill

let fillArr = new Array(10);
fillArr.fill(1); // [1,1,1,1,1,1,1,1,1,1]
fillArr.fill('*',5);
fillArr.fill('!',6,8);
console.log(fillArr);

//Sort

let sortArr = [17,7,12,10,1,2,3];
sortArr.sort();

sortArr.sort((a ,b)=>a+b);
// sortArr.sort((a,b)=>a+b);// 1237101217
console.log(sortArr);


// Splice
let spliceArr=[1,2,3,4,5,6,7];
let afterSplice = spliceArr.splice(2);
// let afterSplice = spliceArr.splice(-1);
// let afterSplice = spliceArr.splice(2,5);
console.log(afterSplice);
console.log(spliceArr);


//Reverse

let reverseArr = [1,2,3];
reverseArr.reverse();
console.log(reverseArr);

// concat

let firstArr = [1,2,3];
let secondArr =[4,5,6];
firstArr = firstArr.concat(secondArr,7,8,9,[10,11]);
console.log(firstArr);

// Includes ===


let includesArr =[1,2,3,'Test'];
console.log(includesArr.includes(20));
console.log(includesArr.includes(2));
console.log(includesArr.includes('Test'));

// IndexOf

let indexOfArr=[1,2,3,'Test'];
console.log(indexOfArr.indexOf(20));
console.log(indexOfArr.indexOf(1));

indexOfArr[1]=[3]
console.log(indexOfArr.indexOf('Test'));


// Join

let joinArr =['Hello', 'World'];
let afterJoin=joinArr.join(',');

//split

afterJoin=afterJoin.split(',')// massiv

console.log(afterJoin);

//Slice

let sliceArr =['Test',12,2,3,4,5];
// let afterSlice = sliceArr.slice(2);
// let afterSlice=sliceArr.slice(1,4);
// let afterSlice=sliceArr.slice();
let afterSlice=sliceArr.slice(-3);
console.log(afterSlice);
console.log(sliceArr);



//Filter

let filterValue =[10,20,30,25,15];
function checkValue(value) {
    return value>20;
}
let filterResult = filterValue.filter(checkValue);
console.log(filterResult);
console.log(filterValue);

let fruits = ['orange', 'banan','orange'];
let oranges = fruits.filter((item)=>item==='orange'? true: false);
console.log(oranges);

// ForEach

let forEachArr=[1,2,3];
forEachArr.forEach((value,index,arr)=>{
    console.log(`ForEach ${value} index: ${index} from${arr}` );
});
console.log(forEachArr);


//Map

let mapArr = ['a','b','c'];
let newMapArr =mapArr.map((value,index,arr)=>`Map value ${value} index ${index} from ${arr}`);
console.log(newMapArr);
console.log(mapArr);


//Old way
 let myArr = ['111', 2,33];
 let newArrOld = [];
 for(let i=0; i<myArr.length; i++){
    console.log(myArr[i]);
    newArrOld.push(myArr[i]+1);
 }
 console.log(newArrOld);
