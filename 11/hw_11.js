

//Spread

let myArr = [1,2,3,];
let yorsArr = [...myArr,7,6,5];
console.log(yorsArr);


//Rest
//1
function fnString(firstString,...restStrings) {
    console.log(firstString);
    console.log(restStrings);
    
}
fnString('Hi', 'How', 'are', 'you');

//2

function calculateAverage(...numbers) {
  if(numbers.length === 0 ){
    return 0;
}
    
let sum = 0;

for(let number of numbers){
    sum += number;
}
return sum / numbers.length;
}

let result = calculateAverage(10,20,30,40,5);
console.log(result);


//TypeOf

//1


function fnName() {

    console.log('Hello world');
}
    fnName();
    console.log(typeof fnName);

    //2

 
// let anything = 5;
// let anything = 'Hi';
let anything = true;
if(typeof anything === 'number'){
    console.log('Это число');
   
}
else if(typeof anything === 'string'){
    console.log('Это ряд');
}
else{
    console.log('Это другой тип');
}
