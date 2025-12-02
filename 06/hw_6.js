// Задани1 



function sum (a,b){
    return a+b;
}

function minus (a,b){
    return a-b;
}

function multiply (a,b){
    return a*b;
}
function divide (a,b){
   
if (b===0){
    return 'Cant divide';
}
    else{
        return a/b
    }

}

let a = 10;
let b = 2;

let operator = '/';
switch (operator) {
    case '+':
        console.log(sum(a,b));
        
        break;
  case '-':
    console.log(minus(a,b));
        break;
  case '*':
    console.log(multiply(a,b));
        break;
          
 case '/':
    console.log(divide(a,b));
           break;

    default:
        console.log('This doesnt exist')
        break;
}


function calculator(operator,a,b) {

    switch (operator) {
    case '+':
        console.log(sum(a,b));
        
        break;
  case '-':
    console.log(minus(a,b));
        break;
  case '*':
    console.log(multiply(a,b));
        break;
          
 case '/':
    console.log(divide(a,b));
           break;

    default:
        console.log('This doesnt exist')
        break;}

}
calculator('+', 10,6);
calculator('-', 10,6);









// Задание 2

// function hiUser(value) {
//     console.log(`Привет ${value}`);   
// }
// function wellcomUser(array, callback) {
//     for( let i=0; i<array.length;i++){

//         callback(array[i]);
//     }
// }

// wellcomUser(['Bob', ' Nick', 'Kite'], hiUser);

// Задание 3

let hiUser = user=>{console.log(`Привет${user}`);
};

let wellcomUser=(array, callback)=>{
    for( let i=0; i<array.length; i++){
        callback(array[i]);
    }
};
let user=['Bob', ' Nick', 'Kite'];
wellcomUser(user, hiUser);


// Задание 4

//  function showText(text = 'По умолчанию') {
//     console.log(text);
//  }
//  showText();
//  showText('Hi there');
    
 // Задание 5


 function showString(string) {
    console.log(string);
    
 }
 function processString(string, callback) {
    for( let i =0; i < string.length; i++){
        callback(string[i]);
    }
 }

let string = [
'Hi',
 'How are you?',
'How is your day?'
];

processString(string, showString);


// Задание 6


function multiplyValues(a,b,c) {
    return a*b*c;   
}
console.log(multiplyValues(2,3,4));